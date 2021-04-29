import paper from "paper";
export default class Paper {
  startPoint = null;
  path = null;
  radio = 1;
  selectItem = null;
  hitOptions = {
    segments: true,
    stroke: true,
    fill: true,
    handles: true,
    tolerance: 5,
  };

  constructor() {
    paper.install(window);
    const canvas = document.getElementById("myCanvas");
    paper.setup(canvas);
    this.defaultStyle = {
      fillColor: new Color(255, 255, 255, 0.2),
      strokeColor: "#409eff",
      selectedColor: "#409eff",
      strokeWidth: 1,
    };
    this.selectStyle = {
      fillColor: new Color(0, 0, 0, 0.1),
      selectedColor: "#f00",
      strokeWidth: 1,
      cursor: "move",
    };
    this.tool = new Tool();
    this.bindEvent();
  }

  bindEvent() {
    const { tool } = this;
    tool.onMouseDown = (event) => {
      this.mouseDown(event);
    };

    tool.onMouseDrag = (event) => {
      this.mouseDrag(event);
    };

    // tool.onMouseUp = (event) => {
    //   this.mouseUp(event);
    // };

    // tool.onMouseMove = (event) => {
    //   // this.mouseMove(event);
    // };
  }

  setState(State) {
    this.radio = State;
  }

  mouseDown(event) {
    const { point } = event;
    const { hitOptions, radio } = this;

    if (radio !== 3) {
      this.path = this.selectItem = null;
    }
    // 选择功能
    if (radio === 0) {
      const hitResult = project.hitTest(point, hitOptions);
      project.activeLayer.style = this.defaultStyle;
      if (!hitResult) return;
      if (hitResult) {
        const { type, item } = hitResult;
        this.selectItem = item;
        // stroke边框 segment段 fill区
        if (type === "segment") {
          project.activeLayer.style = this.defaultStyle;
          // item.selected = true;
          // item.style = this.selectStyle;
        } else if (type === "stroke") {
        }
        item.selected = true;
        item.style = this.selectStyle;
      }
      const movePath = hitResult.type == "fill";
      if (movePath) project.activeLayer.addChild(hitResult.item);
      return;
    }

    if (radio === 3) {
      const hitResult = project.hitTest(
        point,
        Object.assign({ match: this.hitMatchFilter }, hitOptions)
      );
      if (hitResult) {
        this.path.closed = true;
        this.path = null;
        return;
      }
    }

    this.startPoint = point;
    if (this.radio === 2 || this.radio === 3) {
      this.addPoint(point);
    }
  }

  mouseUp() {
    // this.startPoint = null;
    // if (this.path) {
    //   this.path = null;
    // }
  }

  mouseDrag(event) {
    const { point } = event;
    let { startPoint, selectItem, path, radio } = this;
    // 选择功能
    if (this.radio === 0) {
      if (selectItem) {
        selectItem.position.x += event.delta.x;
        selectItem.position.y += event.delta.y;
      }
      return;
    }
    if (radio !== 1) return;
    if (path) {
      path.remove();
    }
    const rectangle = new Rectangle(startPoint, point);
    this.path = new Path.Rectangle(rectangle);
    this.path.style = this.defaultStyle;
    this.path.selected = true;
  }

  // mouseMove({ item }) {
  //   if (item) {
  //     item.style = this.selectStyle;

  //     item.selected = true;
  //   }
  // }

  addPoint(point) {
    if (this.radio === 3 && this.path) {
      // const path = new Path();
      // path.style = this.defaultStyle;
      // path.selected = true;
      this.path.add(point);
      // this.path = this.path.join(path);
    } else {
      this.path = new Path(point);
      this.path.style = this.defaultStyle;
      this.path.selected = true;
      // this.path.add(point);
    }
  }
  hitMatchFilter(hitResult) {
    let flag_obj_is_first = false;
    if (hitResult.item) {
      let hititem = hitResult.item;
      if (hititem.parent.children[0] == hititem) {
        flag_obj_is_first = true;
      }
    }
    console.info(flag_obj_is_first);
    return flag_obj_is_first;
  }
}
