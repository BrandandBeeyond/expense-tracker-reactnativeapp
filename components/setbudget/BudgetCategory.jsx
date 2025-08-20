import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { horizontalScale, verticalScale } from '../../assets/styles/Scaling';
import { useSelector } from 'react-redux';
import Onboarding from 'react-native-onboarding-swiper';

const BudgetCategory = () => {
  const { expenseCategories } = useSelector(state => state.expenses);

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedCategories = Array.isArray(expenseCategories)
    ? chunkArray(expenseCategories, 4)
    : [];

    console.log('Grouped Categories:', groupedCategories);
    

  return (
    <View
      style={[
        globalStyle.mt15,
        globalStyle.p15,
        {
          backgroundColor: '#f5bf73ff',
          borderRadius: horizontalScale(10),
          borderTopRightRadius: horizontalScale(10),
          borderBottomRightRadius: horizontalScale(10),
        },
      ]}
    >
      <Text style={[globalStyle.fs5, { marginBottom: verticalScale(10) }]}>
        Included Categories
      </Text>

      <Onboarding
        showSkip={false}
        showDone={false}
        showNext={false}
        bottomBarHighlight={false}
        pages={
          groupedCategories.length > 0
            ? groupedCategories
                .filter(group => Array.isArray(group) && group.length > 0)
                .map((group, index) => ({
                  backgroundColor: '#f5bf73ff',
                  image: (
                    <FlatList
                      data={group}
                      keyExtractor={(item, idx) =>
                        item?.id?.toString() ?? `${index}-${idx}`
                      }
                      numColumns={2}
                      columnWrapperStyle={{ justifyContent: 'space-between' }}
                      renderItem={({ item }) => (
                        <View style={globalStyle.categoryBox}>
                          <Text style={globalStyle.fs6}>{item.name}</Text>
                        </View>
                      )}
                    />
                  ),
                  title: '',
                  subtitle: '',
                }))
            : [
                {
                  backgroundColor: '#f5bf73ff',
                  image: (
                    <Text style={{ textAlign: 'center', marginTop: verticalScale(20) }}>
                      No categories available.
                    </Text>
                  ),
                  title: '',
                  subtitle: '',
                },
              ]
        }
      />
    </View>
  );
};

export default BudgetCategory;
