// Include useState (hooks) as part of this project
const { useState } = React;

const Palette = () => {

  return (
    <main id="app" class="app">
      <ul class="palette">
         <li className="swatch" style="background-color: rgb(0, 0, 0);">
            <div>rgb(</div>
            <div className="channel">
              <button type="button" className="btn up">+</button>
              <input type="text" className="txt" value="0">
              <button type="button" className="btn down">-</button>
            </div>
            <div className="channel">
              <button type="button" className="btn up">+</button>
              <input type="text" className="txt" value="0">
              <button type="button" className="btn down">-</button>
            </div>
            <div className="channel">
              <button type="button" className="btn up">+</button>
              <input type="text" className="txt" value="0">
              <button type="button" className="btn down">-</button>
            </div>
            <div>);</div>
         </li>
      </ul>
    </main>
  );

};

ReactDOM.render(<Palette />, document.getElementbyID('app');
