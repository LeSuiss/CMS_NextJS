import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeGrid } from 'react-window';
import React from 'react';

export interface WindowGridProps {
  columnCount: number /**test of comment **/;
  dataToDisplay: any[];
  CompoToDisplay: any;
  rowHeight?: number;
}

const WindowGrid = ({
  columnCount,
  dataToDisplay,
  CompoToDisplay,
  rowHeight,
}: WindowGridProps) => {
  return (
    <div
      style={{
        flex: '1 1 auto',
        position: 'relative',
        border: 'solid blue 1px',
        minHeight: '80vh',
      }}
    >
      <AutoSizer
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      >
        {({ height, width }) => (
          <FixedSizeGrid
            style={{
              border: 'solid blue 8px',
              display: 'grid',
              gridAutoColumns: 3,
            }}
            height={height}
            rowHeight={rowHeight ?? 350}
            rowCount={dataToDisplay.length}
            width={width}
            columnWidth={width / (columnCount + 1)}
            columnCount={3}
            itemData={dataToDisplay}
          >
            {({ columnIndex, data, rowIndex, style }) => {
              // Access the data source using the "data" prop:
              const item = data[rowIndex * 3 + columnIndex];
              // divide space with one extra column for gutter + divider gutter into x-1 interspace + 2 for spaces at extrems
              // limit gutter to 20% of the global Width
              const gutter =
                width / (columnCount + 1) ** 2 > (1 / 4) * width
                  ? width
                  : width / (columnCount + 1) ** 2;

              return (
                <div
                  style={{
                    ...style,
                    left: (style.left as number) + (columnIndex + 1) * gutter,
                    top: (style.top as number) + (rowIndex + 0.5) * gutter,
                    height: style.height as number,
                  }}
                >
                  <CompoToDisplay />
                </div>
              );
            }}
          </FixedSizeGrid>
        )}
      </AutoSizer>
    </div>
  );
};

export default WindowGrid;
