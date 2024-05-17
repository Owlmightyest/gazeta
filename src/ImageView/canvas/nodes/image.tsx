import useImage from 'use-image';
import { useEffect, useRef } from 'react';
import { Transformer, Image } from 'react-konva';
import { originWidth } from 'src/CONST';
import { AllNodes } from 'src/ImageView/store/model';
import { ImageNode as Type } from 'src/commonTypes';

export const ImageNode: React.FC<{
  owidth: number;
  selected: boolean;
  onSelect: (s: string) => void;
  onChange: (n: AllNodes) => void;
  index: number;
  el: Type;
}> = ({ owidth, onSelect, onChange, selected, el, index }) => {
  const mult = owidth / originWidth;
  const { name, type, x, y, width, height, ...rest } = el;
  const shapeRef = useRef<any>();
  const trRef = useRef<any>();
  useEffect(() => {
    if (selected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [selected]);
  const updateShape = () => {
    const node = shapeRef.current;

    onChange({
      ...el,
      x: node.x() / mult,
      y: node.y() / mult,
    });
  };
  const [img] = useImage(el.src);
  return (
    <>
      <Image
        ref={shapeRef}
        image={img}
        zIndex={index}
        onClick={() => onSelect(el.id)}
        onTap={() => onSelect(el.id)}
        width={width * mult}
        height={height * mult}
        x={x * mult}
        y={y * mult}
        onTransformEnd={() => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...el,
            x: node.x() / mult,
            y: node.y() / mult,
            // set minimal value
            width: Math.max(5, node.width() * scaleX) / mult,
            height: Math.max(node.height() * scaleY) / mult,
          });
        }}
        onDragEnd={updateShape}
        onTouchEnd={updateShape}
        {...rest}
      />

      {selected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};
