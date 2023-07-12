import React from 'react'
import { ResponsivePie } from '@nivo/pie';

const PieChart = () => {
    const data = [
        { id: 'Pasta de camarones y vino blanco', label: 'Pasta de camarones y vino blanco', value: 35 },
        { id: 'Costillas de cerdo BBQ', label: 'HamCostillas de cerdo BBQ', value: 45 },
        { id: 'Asado de tira al chimichurri', label: 'Asado de tira al chimichurri', value: 20 },
      ];

    return (
        
            <div style={{ height: '400px',backgroundColor:'green' }}>
                <h2>PRODUCTOS MAS VENDIDOS</h2>
                <ResponsivePie
                    data={data}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ scheme: 'category10' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    enableRadialLabels={false}
                    enableSliceLabels={true}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkColor={{ from: 'color' }}
                    sliceLabelsSkipAngle={10}
                    sliceLabelsTextColor="#333333"
                />
            </div>
    
    )
}

export default PieChart