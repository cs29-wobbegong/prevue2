//! could not find a better way to calculate initial component creation H and W
export function useCreateComponent(importObj) {
  const createComponent = (importObj) => {
    let imported = false;
    if (importObj.hasOwnProperty('componentName')) {
      imported = true;
      //Check if state and actions on import exist in the store. If not, add them.
      for (let i = 0; i < importObj.actions.length; i++) {
        if (!this.userActions.includes(importObj.actions[i])) {
          this.createAction(importObj.actions[i])
        }
      }
      for (let i = 0; i < importObj.state.length; i++) {
        if (!this.userState.includes(importObj.state[i])) {
          this.createState(importObj.state[i])
        }
      }
      for (let i = 0; i < importObj.props.length; i++) {
        if (!this.userProps.includes(importObj.props[i])) {
          this.createProp(importObj.props[i])
        }
      }
    }

    if (imported === false && !this.componentNameInputValue.replace(/[^a-z0-9-_.]/gi, "")) {
      event.preventDefault();
      return false;
    }
    // boilerplate properties for each component upon creation
    const component = {
      x: 0,
      y: 0,
      z: 0,
      // !Chris: disabling this temporarily to see if we can have create component dynamically fit into grid- less snapping bugs
      // w: newState.containerW / newState.gridLayout[0] ,
      // h: newState.containerH / newState.gridLayout[1] ,
      htmlList: this.selectedElementList,
      noteList: [],
      children: [],
      actions: [],
      props: [],
      state: [],
      parent: {},
      isActive: false,
      idDrag: '',
      idDrop: '',
      color: "#ffffff85",
      htmlAttributes: {
        class: "",
        id: "",
        gridArea: [0, 0, 2, 2],
      },
    };

    if (imported === true) {
      component.componentName = importObj.componentName;
      component.htmlList = importObj.htmlList;
      component.actions = importObj.actions;
      component.state = importObj.state;
      component.props = importObj.props;
    } else {
      component.componentName = this.componentNameInputValue.replace(/[^a-z0-9-_.]/gi, "");
    }
    if (!this.componentMap[component.componentName]) {
      this.registerComponent(component);
      this.setActiveComponent(component.componentName);
    }
  }
  createComponent(importObj)
}
