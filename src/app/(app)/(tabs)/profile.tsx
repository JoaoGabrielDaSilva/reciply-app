import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { FlashList, MasonryFlashList } from '@shopify/flash-list';
import { useLocalSearchParams } from 'expo-router';
import { createRef, useEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { ProfileAvatar } from '../../../components/profile-avatar';
import { TabScreenAnimatedContainer } from '../../../components/tab-screen-animated-container';
import { compactNumber } from '../../../utils/compact-number';

const uri = 'https://chefin.com.au/wp-content/uploads/2021/02/chef-jason-ludiwg-profile-1.jpg';

const { width } = Dimensions.get('window');

type Measure = {
  x: number;
  width: number;
};

const MENUS = [
  {
    label: 'All Recipes',
    icon: <AntDesign name="appstore-o" className="mr-2" size={18} />,
    ref: createRef<View>(),
  },
  {
    label: 'Cookbook',
    icon: <SimpleLineIcons name="book-open" className="mr-2" size={18} />,
    ref: createRef<View>(),
  },
];

const FOODS = [
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
  {
    imageUri: 'https://atomaizeriai.lt/wp-content/uploads/2019/07/recipe-4.jpg',
  },
];

const FOODS_2 = [
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFjz9e2TL_lqLJR8i6vpA0fh_wM22c4cWDqhOVDOP9cBj-bULHYdbZvf0IxRpV3aT0A&usqp=CAU',
  },
];

export default function Profile() {
  const params = useLocalSearchParams<{ tabIndex: string }>();
  const tabIndex = Number(params.tabIndex);

  const screenRef = useRef<View>(null);
  const containerRef = useRef<View>(null);

  const horizontalScrollView = useAnimatedRef<Animated.ScrollView>();

  const scrollX = useSharedValue(0);
  const scrollY = useSharedValue(0);

  const [measures, setMeasures] = useState<Measure[]>([]);

  const containerTopPosition = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollX.value = e.contentOffset.x;
    },
  });
  const verticalScrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollY.value = e.contentOffset.y;
    },
  });

  const onTabPress = (index: number) => {
    horizontalScrollView?.current?.scrollTo({ x: index * width });
  };

  const measureTabs = () => {
    const m: Measure[] = [];

    MENUS.forEach(menu => {
      menu.ref.current?.measureLayout(containerRef.current, (x, _, width) => {
        m.push({ x, width });

        if (m.length === MENUS.length) {
          setMeasures(m);
        }
      });
    });
  };

  const measureContainer = () => {
    containerRef.current?.measureLayout(screenRef.current, (_, y, __, height) => {
      if (containerTopPosition.value === 0) {
        containerTopPosition.value = y;
      }
    });
  };

  const rContainerStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, containerTopPosition.value, containerTopPosition.value + 1],
            [0, 0, 1],
            Extrapolate.EXTEND
          ),
        },
      ],
    };
  });

  return (
    <TabScreenAnimatedContainer tabIndex={tabIndex}>
      <SafeAreaView
        ref={screenRef}
        className="flex-1 pt-4 bg-background-primary"
        onLayout={() => {
          measureTabs();
          measureContainer();
        }}>
        <Animated.ScrollView
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingBottom: 80 }}
          onScroll={verticalScrollHandler}>
          <View className="flex-1">
            <View className="items-center">
              <ProfileAvatar imageUri={uri} />
              <Text className="font-bold text-2xl mt-4">Carol Gilliam</Text>
              <Text className="text-md">Chicago, USA</Text>

              <View className="flex-row items-center mt-4">
                <View className="items-center">
                  <Text className="font-medium text-xl">580</Text>
                  <Text className="text-gray-500 text-md">Recipes</Text>
                </View>
                <View className="w-[1px] h-1/2 rouned-full bg-gray-500 mx-4" />

                <View className="items-center">
                  <Text className="font-medium text-xl">{compactNumber(890)}</Text>
                  <Text className="text-gray-500 text-md">Following</Text>
                </View>
                <View className="w-[1px] h-1/2 rouned-full bg-gray-500 mx-4" />

                <View className="items-center">
                  <Text className="font-medium text-xl">{compactNumber(190_000)}</Text>
                  <Text className="text-gray-500 text-md">Followers</Text>
                </View>
              </View>
              <Text className="text-md text-text-primary mt-4 text-center w-1/2">
                Active and happy mom of three sons. The best recipes for you and your family every
                day 🥑
              </Text>
            </View>

            <Animated.View style={rContainerStyles}>
              <View
                ref={containerRef}
                className="flex-row items-center justify-around mt-6 px-6 pb-4 bg-background-primary">
                {MENUS.map((item, index) => (
                  <Pressable
                    key={item.label}
                    ref={item.ref}
                    onPress={() => onTabPress(index)}
                    className="flex-row items-center">
                    {item.icon}
                    <Text className="text-lg">{item.label}</Text>
                  </Pressable>
                ))}
              </View>
              {measures.length === MENUS.length ? (
                <AnimatedIndicator scrollX={scrollX} measures={measures} />
              ) : null}
            </Animated.View>
          </View>
          <Animated.ScrollView
            style={{ zIndex: -10 }}
            contentContainerStyle={{ flexGrow: 1 }}
            ref={horizontalScrollView}
            horizontal
            bounces={false}
            pagingEnabled
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            onScroll={scrollHandler}>
            <View style={{ width }}>
              <FlatList
                data={FOODS}
                scrollEnabled={false}
                numColumns={3}
                renderItem={({ item }) => (
                  <View className="flex-1 h-56 m-1 rounded-lg">
                    <Image source={{ uri: item.imageUri }} className="flex-1 rounded-lg " />
                  </View>
                )}
              />
            </View>
            <View style={{ width, flexGrow: 1 }}>
              <FlatList
                data={FOODS_2}
                scrollEnabled={false}
                numColumns={3}
                renderItem={({ item }) => (
                  <View className="flex-1 h-56  m-1 rounded-lg">
                    <Image source={{ uri: item.imageUri }} className="flex-1 rounded-lg " />
                  </View>
                )}
              />
            </View>
          </Animated.ScrollView>
        </Animated.ScrollView>
      </SafeAreaView>
    </TabScreenAnimatedContainer>
  );
}

type AnimatedIndicatorProps = {
  scrollX: SharedValue<number>;
  measures: Measure[];
};

const AnimatedIndicator = ({ scrollX, measures }: AnimatedIndicatorProps) => {
  const inputRange = MENUS.map((_, index) => index * width);

  const positionsMeasures = useMemo(() => measures.map(measure => measure.x), [measures]);
  const widthMeasures = useMemo(() => measures.map(measure => measure.width), [measures]);

  const rIndicatorStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(scrollX.value, inputRange, positionsMeasures, Extrapolate.CLAMP),
        },
      ],
      width: interpolate(scrollX.value, inputRange, widthMeasures, Extrapolate.CLAMP),
    };
  });

  return (
    <Animated.View style={[rIndicatorStyles]}>
      <Animated.View className="h-1 bg-black rounded-full bottom-[8px]" />
    </Animated.View>
  );
};
