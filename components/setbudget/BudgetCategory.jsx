import React, { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/Scaling';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, TextInput } from 'react-native-paper';
import { fetchExpenseCategories } from '../../redux/actions/ExpenseCategoryAction';
import ReactNativeModal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BudgetCategory = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const { expenseCategories } = useSelector(state => state.expenses);
  const [loading, setLoading] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);

  const showCategoryModal = () => {
    setCategoryModalVisible(true);
  };

  const hideCategoryModal = () => {
    setCategoryModalVisible(false);
  };

  const toggleCategory = categoryId => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  useEffect(() => {
    if (categoryModalVisible) {
      dispatch(fetchExpenseCategories());
    }
  }, [categoryModalVisible, dispatch]);

  return (
    <>
      <View style={[globalStyle.mt15, { padding: horizontalScale(6) }]}>
        <Text
          style={[
            {
              marginBottom: verticalScale(10),
              fontSize: scaleFontSize(15),
              fontWeight: '500',
            },
          ]}
        >
          Included Categories
        </Text>

        <TouchableOpacity style={globalStyle.mt15} onPress={showCategoryModal}>
          <TextInput
            label="Select Categories"
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
      </View>

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
              <Text style={[globalStyle.fs5, { fontWeight: '700' }]}>
                Select budget categories
              </Text>
              <Pressable onPress={hideCategoryModal}>
                <AntDesign name="close" size={20} color={'#000000'} />
              </Pressable>
            </View>
            {loading ? (
              <Text>Loading</Text>
            ) : (
              <>
                <View
                  style={[
                    globalStyle.mt10,
                    globalStyle.mx10,
                    { marginBottom: verticalScale(40) },
                  ]}
                >
                  {expenseCategories.map((category, index) => (
                    <View
                      style={[
                        globalStyle.drow,
                        globalStyle.aligncenter,
                        globalStyle.justifyBtn,
                        globalStyle.bgSemiMain,
                        globalStyle.py5,
                        globalStyle.px15,
                        globalStyle.rounded2,
                        globalStyle.mb20,
                      ]}
                    >
                      <View
                        style={[
                          globalStyle.drow,
                          globalStyle.cg5,
                          globalStyle.aligncenter,
                        ]}
                      >
                        <View
                          style={[
                            globalStyle.bgWhite,
                            {
                              padding: verticalScale(8),
                              borderRadius: horizontalScale(50),
                            },
                          ]}
                        >
                          <Image
                            source={{ uri: category.icon.url }}
                            style={{
                              width: 23,
                              height: 23,
                            }}
                          />
                        </View>

                        <Text style={[globalStyle.fs5, { fontWeight: '500' }]}>
                          {category.name}
                        </Text>
                      </View>
                      <Checkbox
                        status={
                          selectedCategories.includes(category._id)
                            ? 'checked'
                            : 'unchecked'
                        }
                        onPress={() => toggleCategory(category._id)}
                        color="#ff9900"
                      />
                    </View>
                  ))}
                </View>
                <View style={[globalStyle.px15, { alignItems: 'flex-end' }]}>
                  <Button
                    buttonColor="#17181c"
                    style={{ paddingHorizontal: horizontalScale(20) }}
                  >
                    <Text style={globalStyle.textWhite}>Done</Text>
                  </Button>
                </View>
              </>
            )}
          </ScrollView>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default BudgetCategory;
