import React, { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenseCategories } from '../../redux/actions/ExpenseCategoryAction';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { TextInput } from 'react-native-paper';
import ReactNativeModal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { horizontalScale } from '../../assets/styles/Scaling';

const IncomeCategoryModal = () => {

    const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const { expenseCategories, loading } = useSelector(state => state.expenses);
  const dispatch = useDispatch();

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


    const IncomeOptions = expenseCategories.filter(cat => cat.transactionType === 'Income');

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
                width: 30,
                height: 30,
              }}
            />
          </View>
    
          <Text style={[globalStyle.fs6, globalStyle.mt5,{fontWeight:'600'}]}>{item.name}</Text>
        </TouchableOpacity>
      );

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
                <AntDesign name="close" size={20} color={'#000000'} />
              </Pressable>
            </View>
            {loading ? (
              <Text>Loading</Text>
            ) : (
              <>
                 <FlatList
                      data={IncomeOptions}
                      numColumns={4}
                      renderItem={renderCategoryItem}
                      keyExtractor={item => item._id}
                      columnWrapperStyle={{
                        justifyContent: 'flex-start',
                        gap: 10,
                      }}
                      scrollEnabled={false}
                    />
              </>
            )}
          </ScrollView>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default IncomeCategoryModal;
