export default (state = [], action) => {
  let index;
  let quote;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      quote.votes += 1;
      return [
        ...state.map(quoteInstance => {
          return quoteInstance.id === action.quoteId ? quote : quoteInstance;
        })
      ];

    case "DOWNVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      quote.votes -= 1;
      return quote.votes > 0
        ? [
            ...state.map(quoteInstance => {
              return quoteInstance.id === action.quoteId
                ? quote
                : quoteInstance;
            })
          ]
        : state;
    default:
      return state;
  }
};
