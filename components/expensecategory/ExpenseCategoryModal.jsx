import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { Button, TextInput } from 'react-native-paper';
import ReactNativeModal from 'react-native-modal';
import { fetchExpenseCategories } from '../../redux/actions/ExpenseCategoryAction';
import { useDispatch, useSelector } from 'react-redux';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/Scaling';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ExpenseCategoryModal = () => {
  const dispatch = useDispatch();
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const { expenseCategories, loading } = useSelector(state => state.expenses);

  const showCategoryModal = () => {
    setCategoryModalVisible(true);
  };

  const hideCategoryModal = () => {
    setCategoryModalVisible(false);
  };

  useEffect(() => {
    if (categoryModalVisible) {
      dispatch(fetchExpenseCategories());
    }
  }, [categoryModalVisible, dispatch]);

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: horizontalScale(8),
      }}
    >
      <View
        style={{
          borderWidth: horizontalScale(1),
          borderColor: '#ffbb5f',
          padding: horizontalScale(5),
          borderRadius: horizontalScale(6),
        }}
      >
        <Image
          source={{ uri: item.icon.url }}
          style={{
            width: 25,
            height: 25,
          }}
        />
      </View>

      <Text style={[globalStyle.fs6, globalStyle.mt5]}>{item.name}</Text>
    </TouchableOpacity>
  );

  const groupedData = {
    Basic: expenseCategories.filter(cat => cat.categoryType === 'Basic'),
    Enjoyment: expenseCategories.filter(
      cat => cat.categoryType === 'Enjoyment',
    ),
    Healthcare: expenseCategories.filter(
      cat => cat.categoryType === 'Healthcare',
    ),
  };

  return (
    <>
      <TouchableOpacity style={globalStyle.mt15} onPress={showCategoryModal}>
        <TextInput
          label="Select Category"
          editable={false}
          style={globalStyle.transactionInput}
          underlineColor="transparent"
          left={
            <TextInput.Icon
              icon="format-list-bulleted"
              style={{ backgroundColor: '#FFFFFF' }}
            />
          }
          right={<TextInput.Icon icon="chevron-right" />}
        />
      </TouchableOpacity>

      <ReactNativeModal
        isVisible={categoryModalVisible}
        onBackdropPress={hideCategoryModal}
        style={globalStyle.btmmodal}
      >
        <View style={globalStyle.modalContent}>
          <ScrollView style={globalStyle.scrollContent}>
            <View
              style={[
                globalStyle.justifyBtn,
                globalStyle.aligncenter,
                globalStyle.p15,
                globalStyle.drow,
                {
                  borderBottomColor: '#ffbb5f',
                  borderBottomWidth: horizontalScale(1),
                },
              ]}
            >
              <Text style={[globalStyle.fs5, globalStyle.fwbold]}>
                Choose Category
              </Text>
              <Pressable onPress={hideCategoryModal}>
                <AntDesign name="close" size={20}  color={'#000000'} />
              </Pressable>
            </View>
            {loading ? (
              <Text>Loading</Text>
            ) : (
              <>
                {Object.keys(groupedData).map(type => (
                  <View
                    key={type}
                    style={{
                      padding: horizontalScale(10),
                    }}
                  >
                    <Text
                      style={[
                        globalStyle.fs5,
                        globalStyle.fwsemibold,
                        globalStyle.mb10,
                      ]}
                    >
                      {type}
                    </Text>
                    <FlatList
                      data={groupedData[type]}
                      numColumns={4}
                      renderItem={renderCategoryItem}
                      keyExtractor={item => item._id}
                      columnWrapperStyle={{
                        justifyContent: 'flex-start',
                        gap: 10,
                      }}
                      scrollEnabled={false}
                    />
                  </View>
                ))}
              </>
            )}
          </ScrollView>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default ExpenseCategoryModal;
