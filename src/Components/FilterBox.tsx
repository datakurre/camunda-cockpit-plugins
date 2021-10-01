import './react-filter-box.scss';
import './react-datepicker.scss';

import React, { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import ReactFilterBox, { Expression } from 'react-filter-box';

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

const customRenderCompletionItem = (self: any, data: any, registerAndGetPickFunc: any, query: string) => {
  if (data.value?.customType === 'date') {
    const pick = registerAndGetPickFunc();
    const start = self.from.ch;
    const date = query.substr(start).split(' ')[0];
    const selected: Date = !isNaN(new Date(date).getTime()) ? new Date(date) : new Date();
    return (
      <div>
        <ReactDatePicker
          selected={selected}
          onChange={(date: Date) => {
            const dateString = date?.toISOString().split('T')[0];
            // Fix code mirror cursor position
            self.to.ch = start + dateString.length + 1;
            pick(dateString);
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

const FilterBox = (props: any) => {
  const [query, setQuery] = useState(props.defaultQuery());

  // Update auto complete to not offer same category twice
  useEffect(() => {
    props.autoCompleteHandler.setQuery(query);
  }, [query]);

  return (
    <div className="form-control">
      <SimpleReactFilterBox
        options={props.options}
        strictMode={true}
        query={props.defaultQuery()}
        autoCompleteHandler={props.autoCompleteHandler}
        customRenderCompletionItem={(self: any, data: any, registerAndGetPickFunc: any) =>
          customRenderCompletionItem(self, data, registerAndGetPickFunc, query)
        }
        onChange={(query: string) => setQuery(query)}
        onParseOk={(expressions: Expression[]) => {
          props.onParseOk(expressions);
          (document?.activeElement as HTMLElement)?.blur();
        }}
      />
    </div>
  );
};

export default FilterBox;
