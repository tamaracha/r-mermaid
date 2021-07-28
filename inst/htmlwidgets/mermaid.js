HTMLWidgets.widget({

  name: 'mermaid',

  type: 'output',

  factory: function(el, width, height) {
    mermaid.initialize({
      startOnLoad:false
    })
    return {
      renderValue: function(x) {
        mermaid.render(`img-${el.id}`, x.diagram, (svg, fns) => {
          el.innerHTML = svg
        })
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});