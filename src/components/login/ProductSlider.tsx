import React, { FC, useMemo } from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import AutoScroll from '@homielab/react-native-auto-scroll';
import { imageData } from '@utils/dummyData';
import { screenWidth } from '@utils/Scaling';

type RowProps = {
    item: ImageSourcePropType[];
    index: number;
};

const Row: FC<RowProps> = React.memo(({ item }) => {
    return (
        <View style={styles.row}>
            {item.map((image, i) => {
                const horizontalShift = i % 2 === 0 ? -18 : 18;
                return (
                    <View
                        key={i}
                        style={[
                            styles.itemContainer,
                            { transform: [{ translateX: horizontalShift }] },
                        ]}
                    >
                        <Image source={image} style={styles.image} />
                    </View>
                );
            })}
        </View>
    );
});

const ProductSlider: FC = () => {
    const rows = useMemo(() => {
        const result: ImageSourcePropType[][] = [];
        for (let i = 0; i < imageData.length; i += 4) {
            result.push(imageData.slice(i, i + 4));
        }
        return result;
    }, []);

    return (
        <View pointerEvents="none">
            <AutoScroll duration={10000} endPaddingWidth={0} style={styles.autoScrollContainer}>
                <View style={styles.container}>
                    {rows.map((row, index) => (
                        <Row key={index} item={row} index={index} />
                    ))}
                </View>
            </AutoScroll>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        overflow: 'hidden',
        alignContent: 'center',
    },
    autoScrollContainer: {
        position: 'absolute',
        zIndex: -2,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
        marginRight: 10,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        marginRight: 25,
    },
    itemContainer: {
        marginBottom: 5,
        marginHorizontal: 15,
        width: screenWidth * 0.26,
        height: screenWidth * 0.26,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        gap: 15,
    },
});

export default ProductSlider;
