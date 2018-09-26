const appState = {
  title: {
    text: "this is title",
    color: "red"
  },
  content: {
    text: "this is content",
    color: "blue"
  }
};

function renderApp(newAppState, oldAppState = {}) {
  // console.log(111);
  if (newAppState === oldAppState) return;
  console.log("render app...");
  renderTitle(newAppState.title);
  renderContent(newAppState.content);
}

function renderTitle(newTitle, oldTitle = {}) {
  if (newTitle === oldTitle) return;
  console.log("render title");
  const titleDom = document.getElementById("title");
  titleDom.innerHTML = newTitle.text;
  titleDom.style.color = newTitle.color;
}

function renderContent(newContent, oldContent = {}) {
  if (newContent === oldContent) return;
  console.log("render content");
  const contentDom = document.getElementById("content");
  contentDom.innerHTML = newContent.text;
  contentDom.style.color = newContent.color;
}

function dispatch(action) {
  switch (actions.type) {
    case "UPDATE_TITLE_TEXT":
      appState.title.text = action.text;
      break;
    case "update_title.COLOR":
      appstate.title.color = action.color;
      break;
    default:
      break;
  }
}

// function stateChanger(state, action) {
//   switch (action.type) {
//     case "UPDATE_TITLE_TEXT":
//       state.title.text = action.text;
//       break;
//     case "UPDATE_TITLE_COLOR":
//       state.title.color = action.color;
//       break;
//     default:
//       break;
//   }
// }

// function stateChanger(state, action) {
//   switch (action.type) {
//     case "UPDATE_TITLE_TEXT":
//       return {
//         // 构建新的对象并且返回
//         ...state,
//         title: {
//           ...state.title,
//           text: action.text
//         }
//       };
//     case "UPDATE_TITLE_COLOR":
//       return {
//         // 构建新的对象并且返回
//         ...state,
//         title: {
//           ...state.title,
//           color: action.color
//         }
//       };
//     default:
//       return state; // 没有修改，返回原来的对象
//   }
// }

function reducer(state, action) {
  if (!state) {
    return {
      title: {
        text: "this is title",
        color: "red"
      },
      content: {
        text: "this is content",
        color: "blue"
      }
    };
  }
  switch (action.type) {
    case "UPDATE_TITLE_TEXT":
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      };
    case "UPDATE_TITLE_COLOR":
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      };
  }
}

function createStore(reducer) {
  let state = null;
  const listeners = [];
  const subscribe = listener => listeners.push(listener);
  const getState = () => state;
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => {
      listener();
    });
  };
  dispatch({});
  return { getState, dispatch, subscribe };
}

const store = createStore(reducer);
// let oldState = Object.assign({}, store.getState());
// let oldState = { ...store.getState() };
let oldState = store.getState();
console.log("oldState", oldState);
// store.subscribe(() => renderApp(store.getState()));
store.subscribe(() => {
  const newState = store.getState();
  console.log("newState", newState);
  renderApp(newState, oldState);
  oldState = newState;
});

store.dispatch({
  type: "UPDATE_TITLE_TEXT",
  text: "我是新更新的TITLE"
});

store.dispatch({
  type: "UPDATE_TITLE_COLOR",
  color: "pink"
});
