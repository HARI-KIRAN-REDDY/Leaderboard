const stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
});

const layer = new Konva.Layer();

const stands = 10;
const standWidth = 80;
const standHeight = 120;
const aisleWidth = 40;

for (let i = 0; i < stands; i++) {
    const x = (i % 2) * (standWidth + aisleWidth);
    const y = Math.floor(i / 2) * (standHeight + aisleWidth);

    const stand = new Konva.Rect({
        x: x + aisleWidth,
        y: y,
        width: standWidth,
        height: standHeight,
        fill: 'lightgray',
        stroke: 'black',
        strokeWidth: 2
    });

    layer.add(stand);

    if (i % 2 === 0 && i !== stands - 1) {
        const aisle = new Konva.Rect({
            x: x + standWidth,
            y: y,
            width: aisleWidth,
            height: standHeight,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 2
        });
        layer.add(aisle);
    }
}

stage.add(layer);
