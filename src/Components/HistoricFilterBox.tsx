import './react-filter-box.scss';
import './react-datepicker.scss';

import React, { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import ReactFilterBox, { Expression, GridDataAutoCompleteHandler } from 'react-filter-box';

class SimpleReactFilterBox extends ReactFilterBox {
  constructor(props: any) {
    super(props);
    if (props.query) {
      this.onSubmit(props.query);
    }
  }

  needAutoCompleteValues(codeMirror: any, text: string) {
    return this.parser.getSuggestions(text).filter(hintInfo => {
      return !['(', ')', 'OR'].includes(hintInfo.value as string);
    });
  }
}

class HistoricAutoCompleteHandler extends GridDataAutoCompleteHandler {
  query = '';

  setQuery(query: string) {
    this.query = query;
  }

  needCategories(): string[] {
    return super.needCategories().filter((value: string) => !this.query.includes(value));
  }

  needOperators(parsedCategory: string) {
    if (parsedCategory === 'started') {
      return ['after'];
    }
    if (parsedCategory === 'finished') {
      return ['before'];
    }
    if (parsedCategory === 'maxResults') {
      return ['is'];
    }
    return [];
  }

  needValues(parsedCategory: string, parsedOperator: string) {
    if (parsedOperator === 'after' || parsedOperator === 'before') {
      return [{ customType: 'date' }];
    }
    return super.needValues(parsedCategory, parsedOperator);
  }
}

const HistoricOptions = [
  {
    columnField: 'started',
    type: 'date',
  },
  {
    columnField: 'finished',
    type: 'date',
  },
  {
    columnField: 'maxResults',
    type: 'text',
  },
];

const customRenderCompletionItem = (self: any, data: any, registerAndGetPickFunc: any, query: string) => {
  if (data.value?.customType === 'date') {
    const pick = registerAndGetPickFunc();
    const start = self.from.ch;
    const date = query.substr(start).split(' ')[0];
    self.to.ch = start + date.length + 1; // Fix code mirror cursor position
    let selected: Date | null;
    try {
      selected = new Date(date);
    } catch (e) {
      selected = null;
    }
    return (
      <div>
        <ReactDatePicker
          selected={selected}
          onChange={(date: Date) => {
            pick(date?.toISOString().split('T')[0]);
          }}
          inline
        />
      </div>
    );
  } else {
    const className = ` hint-value cm-${data.type}`;
    return <div className={className}>{data.value}</div>;
  }
};

const defaultQuery = (): string => {
  // @ts-ignore
  const weekAgo = new Date(new Date() - 1000 * 3600 * 24 * 7).toISOString().split('T')[0];
  // @ts-ignore
  const tomorrow = new Date(new Date() - 1000 * 3600 * 24 * -1).toISOString().split('T')[0];
  return `started after ${weekAgo} AND finished before ${tomorrow} and maxResults is 1000`;
};

const HistoricFilterBox = (props: any) => {
  const [query, setQuery] = useState(defaultQuery);
  const [expressions, setExpressions] = useState([] as Expression[]);
  const [autoCompleteHandler] = useState(new HistoricAutoCompleteHandler([], HistoricOptions));

  // Update auto complete to not offer same category twice
  useEffect(() => {
    autoCompleteHandler.setQuery(query);
  }, [query]);

  useEffect(() => {
    const map = new Map(expressions.map(expression => [expression.category, expression.value]));
    if (!!props.onChange && map.size > 0) {
      props.onChange({
        sortBy: 'endTime',
        sortOrder: 'desc',
        startedAfter: map.has('started') ? `${map.get('started')}T00:00:00.000+0000` : null,
        finishedBefore: map.has('finished') ? `${map.get('finished')}T00:00:00.000+0000` : null,
        maxResults: map.has('maxResults') ? map.get('maxResults') : '100',
      });
    }
  }, [expressions]);

  return (
    <div className="form-control">
      <SimpleReactFilterBox
        options={HistoricOptions}
        strictMode={true}
        query={query}
        autoCompleteHandler={autoCompleteHandler}
        customRenderCompletionItem={(self: any, data: any, registerAndGetPickFunc: any) =>
          customRenderCompletionItem(self, data, registerAndGetPickFunc, query)
        }
        onChange={(query: string) => setQuery(query)}
        onParseOk={(expressions: Expression[]) => setExpressions(expressions)}
      />
    </div>
  );
};

export default HistoricFilterBox;
