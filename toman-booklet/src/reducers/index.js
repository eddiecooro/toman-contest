import { 
   ADD_CHILD, REMOVE_CHILD, CREATE_NODE,
   DELETE_NODE, EDIT_NODE, SET_EDIT_NODE 
  } from '../actions'


const node = (state, action) => {
  switch (action.type) {
    case CREATE_NODE:
      // ...
    case ADD_CHILD:
      // ...
    case REMOVE_CHILD:
      // ...
    case EDIT_NODE:
      // ...
    default:
      return state
  }
}



let INITIAL_STATE = {
  editNode: null,
  nodes: {}
}

export default (state = INITIAL_STATE, action) => {
  const { nodeId } = action
  if (typeof nodeId === 'undefined') {
    return state
  }
  if (action.type === SET_EDIT_NODE) {
    // ...
  }

  if (action.type === DELETE_NODE) {
    // ...
  }

  return {
    editNode: state.editNode,
    nodes: {
      ...state.nodes,
      [nodeId]: node(state.nodes[nodeId], action)
    }
  }
}
