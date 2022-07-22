import React, {ReactElement} from 'react';
import {View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {ChartProp} from '../../../types/navigation/navigation_type';

const screenWidth = Dimensions.get('window').width;

export default function ChartView({cases, dates}: ChartProp): ReactElement {
  const case_data = cases.reverse().slice(0, 10).reverse();
  const dates_data = dates.reverse().slice(0, 10).reverse();
  return (
    <View>
      <LineChart
        data={{
          labels: dates_data,
          datasets: [
            {
              data: case_data,
            },
          ],
        }}
        width={screenWidth} // from react-native
        height={500}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#0099FF',
          backgroundGradientFrom: '#00CCDB',
          backgroundGradientTo: '#0063D6',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#00CCDB',
          },
        }}
        verticalLabelRotation={70}
        // horizontalLabelRotation={-20}
        bezier
        // hidePointsAtIndex={xArray}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
