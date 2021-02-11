import React, { Component, useState } from 'react'
//import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, Dimensions,TouchableOpacity,
  FlatList,
  ScrollView, Image, Animated, SafeAreaView
} from 'react-native'
//import Button from 'components/Button'
import { colors } from 'theme'
import { LineChart} from "react-native-chart-kit";
//import {Card} from 'react-native-shadow-cards';
//import { Details } from "../details/Details";
//import * as theme from '../theme1';
//import LottieView from 'lottie-react-native';
//import { Card, Badge, Block, Text1 } from '../details/components';
import { theme } from '../details/constants';
//import { mocks1 } from "../details/constants";
import FontIcon from 'react-native-vector-icons/FontAwesome5'


const { width, height } = Dimensions.get('window');
const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  ];
const data = [
  900000, 912000, 913000,917000,916000,921000
  ];
const data1 = [
  892000, 902000, 907000,915000,912000,918000
  ];
  const mocks = [
    {
      id: 1,
      user: {
        name: 'Lelia Chavez',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      saved: true,
      location: 'Peel Bank Data',
      temperature: 34,
      title: 'Employment Rate Decreased',
      description: 'Unemployment has increased in the Peel region, from 11.3% to 11.7% vs last month.',
      rating: 4.3,
      reviews: 3212,
      preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      ]
    },
    {
      id: 2,
      user: {
        name: 'Lelia Chavez',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      saved: false,
      location: 'Loutraki, Greece',
      temperature: 34,
      title: 'Loutraki',
      description: 'This attractive small town, 80 kilometers from Athens',
      rating: 4.6,
      reviews: 3212,
      preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
      ]
    },
    {
      id: 3,
      user: {
        name: 'Lelia Chavez',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      saved: true,
      location: 'Santorini, Greece',
      temperature: 34,
      title: 'Santorini',
      description: 'Santorini - Description',
      rating: 3.2,
      reviews: 3212,
      preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      ]
    },
    {
      id: 4,
      user: {
        name: 'Lelia Chavez',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      location: 'Loutraki, Greece',
      temperature: 34,
      title: 'Loutraki',
      description: 'This attractive small town, 80 kilometers from Athens',
      rating: 5,
      reviews: 3212,
      preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
      ]
    },
  ]
  
  const styles1 = StyleSheet.create({
    
    memberImage: {
      height: 30,
      width: 30,
      marginRight:4,
      borderRadius:20,
    },
    separator: {
      height: 1,
      backgroundColor: "#CCCCCC"
    },
    
    groupMembersContent:{
      flexDirection:'row',
      marginTop:10
    }
  });
const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'flex-start',
    backgroundColor: colors.lightGrayPurple,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  title: {
    fontSize: 24,
    marginTop: 20,
  },
  stitle: {
    fontSize: 12,
    color: '#a4a4a4',
    alignContent: 'left'
  },
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7"
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"rgba(52,209,184, 0.16)",
    padding: 10,
    flexDirection:'row',
    borderRadius:16,
  },
  card1:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"rgba(81,141,231, 0.2)",
    padding: 10,
    flexDirection:'row',
    borderRadius:16,
  },
  card2:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"rgba(231,189,81, 0.2)",
    padding: 10,
    flexDirection:'row',
    borderRadius:16,
  },

  name:{
    fontSize:14,
    color:"#00000",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#979797"
  },
  
  flex: {
    flex: 1,
  },
  flex1: {
    flex: 1,
    alignItems: 'flex-end'
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  
  recommended: {
  },
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: theme.sizes.padding,
    marginVertical: theme.sizes.margin * 0.66
  },
  recommendedList: {
  },
  recommendation: {
    width: (width - (theme.sizes.padding * 2)) / 1.2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
    borderTopRightRadius: theme.sizes.border,
    borderTopLeftRadius: theme.sizes.border,
  },
  recommendation1: {
    width: (width - 50),
    marginHorizontal: 8,
    backgroundColor: '#f6f6f6',
    overflow: 'hidden',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.sizes.padding / 2,
    position: 'absolute',
    top: -20,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: theme.sizes.font * 1.25,
    color: theme.colors.white
  },
  recommendationImage: {
    width: (width - (theme.sizes.padding * 2)) / 1.2,
    height: (width - (theme.sizes.padding * 2)) / 2,
  },
  
  
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  
  card3:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    /* marginLeft: 20,
    marginRight: 20, */
    backgroundColor:"rgba(52,209,184, 1)",
    padding: 5,
    flexDirection:'row',
    borderRadius:16,
    alignSelf: 'flex-end'
  },
  card5:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    /* marginLeft: 20,
    marginRight: 20, */
    backgroundColor:"rgba(52,209,184, 0.18)",
    padding: 5,
    flexDirection:'row',
    borderRadius:16,
    alignSelf: 'flex-end'
  },
  
  card4:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    /* marginLeft: 20,
    marginRight: 20, */
    backgroundColor:"#fff",
    padding: 5,
    flexDirection:'row',
    borderRadius:16,
    width: 140
  },
  count:{
    fontSize:12,
    alignSelf:'flex-start',
    color:"#1f2123",
    paddingLeft: 5
  },
  count1:{
    fontSize:12,
    alignSelf:'flex-end',
    color:"#960303",
    paddingLeft: 10,
    marginRight: 5
  },
  cardHeader: {
    flex: 1,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignContent:"space-between", 
    justifyContent:"space-between"
  },
})

const imgs1 = [
  {
    id:3, 
    name: "Econominc Indicators", 
    updates:"Group 1", 
    updatedDate: '2 Feb 2021',  
    members:[
      "https://bootdey.com/img/Content/avatar/avatar6.png", 
      "https://bootdey.com/img/Content/avatar/avatar1.png", 
      "https://bootdey.com/img/Content/avatar/avatar2.png",
      "https://bootdey.com/img/Content/avatar/avatar7.png"
    ]
  }
]

/* const Home = ({ navigation }) => (
  
  
) */

const Home = () => {
  const [shouldShow, setShouldShow] = useState(true);
  const [shouldShow1, setShouldShow1] = useState(false);
  const [shouldShow2, setShouldShow2] = useState(false);
  const { destinations } = mocks;
  //const isLastItem = index === destinations.length - 1;
  
  return (
    
    <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: '0' }}
        >

      <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingStart: 20, paddingEnd:20, paddingTop: 10}}>
      <View style={{flexDirection: 'column'}}>
      <Text style={styles.title}>6336 Culmore Cres.</Text>
      <Text style={styles.stitle}>Last Updated at 12/28/2020.</Text>
      </View>
        <View style={{paddingTop: 15}}>
        <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#f6f6f6', alignContent: 'center', alignItems: 'center'}}>
        <View style={{paddingTop: 5}}>
        <FontIcon
                name="caret-down"
                color= '#35d1b9'
                size={40}
                solid
              />
        </View>
        
        </View>
        </View>
         
      </View>
      
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingStart: 20, paddingEnd:20, paddingTop: 20}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Propzi Price</Text>
        <View style={{height: 30, width:88, backgroundColor: '#f2f2f2'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingStart: 15, paddingEnd:15, paddingTop: 7}}>
        <Text style={{fontSize:12, color: '#000', paddingLeft:0}}>Date</Text>
        <FontIcon
                name="chevron-down"
                color= '#000000'
                size={12}
                solid
              />
          </View>
        </View>
        </View>
      
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingStart: 50, paddingEnd:50, paddingTop: 20}}>
          <View style={{flexDirection: 'row'}}>
          <FontIcon
                name="circle"
                color= '#35d1b9'
                size={10}
                solid
              />
             <Text style={{fontSize:10, color: '#35d1b9', paddingLeft:3}}>6336 Culmore Cres</Text>      
          </View>
          <View style={{flexDirection: 'row'}}>
          <FontIcon
                name="circle"
                color= '#979797'
                size={10}
                solid
              />
            <Text style={{fontSize:10, color: '#979797', paddingLeft:3}}>Avg. Market Price</Text>
          </View>
         
          
      </View>
      <View style= {{marginTop: 20}}>
      <LineChart
                data={{
                  labels: labels,
                  datasets: [
                    {
                      data: data,
                      color: (opacity = 1) => `rgba(94, 229, 208, 1)`, // optional
                      strokeWidth: 2 
                    },
                    {
                      data: data1,
                      color: (opacity = 1) => `rgba(151, 151, 151, 1)`, // optional
                      strokeWidth: 2 
                    }
                  ],
                }}
                width={Dimensions.get('window').width - 10} // from react-native
                height={220}
                //withHorizontalLabels = {false}
                withDots = {false}
                withInnerLines = {false}
                withOuterLines = {false}
                yAxisLabel="$"
                yAxisInterval={2}
                chartConfig={{
                  backgroundColor: '#fff',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#FFF',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  useShadowColorFromDataset: false, // optional,
                  color: (opacity = 0) => `rgba(0, 256, 256, ${opacity})`,
                  labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 30,
                  },
                  propsForDots: {
                    r: '0',
                    strokeWidth: '0',
                    stroke: '#35d1b9',
                  },
                  
                  
                }}
                //bezier
                style={{
                  marginVertical: 5,
                  borderRadius: 15,
                }}
                renderDotContent={({ x, y, index }) => {
                  return (
                    <View
                      style={{
                        height: 24,
                        width: 24,
                        backgroundColor: "#abc",
                        position: "absolute",
                        top: y - 36, // <--- relevant to height / width (
                        left: x - 12, // <--- width / 2
                      }}
                    >
                      <Text style={{ fontSize: 10 }}>{data[index]}</Text>
                    </View>
                  );
                }}
              />
              <View style={[ styles.flex1, styles.row, styles.recommendationOptions ]}>
              
              <View style={[styles.card5, {marginLeft: width - 200}]}>
                
                  <Text style={{color: '#303030', fontSize: 12}}>$921000</Text>
                  <Text style={{color: '#2cde49', fontSize: 10}}>+1.35%</Text>
                 
                </View>
            </View>
      </View>

      <View style= {{marginTop: 0}}>
      {shouldShow ? (
          <View>
          <TouchableOpacity style={[styles.card,  {marginBottom: 20}]} onPress={() => setShouldShow(!shouldShow)}>
          <View style={styles.cardContent}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
              <Text style={styles.name}>Home Renovations</Text>
              <Text style={styles.count}>Last updated on Dec 28th, 2020</Text>
              </View>
              <View style={{marginTop: -10, alignContent: 'flex-end', paddingLeft: 50}}>
              <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#f6f6f6', alignContent: 'flex-end', alignItems: 'center'}}>
              <View style={{paddingTop: 5}}>
              <FontIcon
                      name="caret-right"
                      color= '#35d1b9'
                      size={40}
                      solid
                    />
              </View>
              
              </View>
              </View>
            </View>
            
          </View>
        </TouchableOpacity>
            <View style={[styles.flex, styles.column, styles.recommended ]}>
            
            <View style={[styles.column, styles.recommendedList]}>
                <FlatList
                  horizontal
                  pagingEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  legacyImplementation={false}
                  scrollEventThrottle={16}
                  snapToAlignment="center"
                  style={{ overflow: 'visible', wid: (width - 50) }}
                  data={mocks}
                  keyExtractor={(item, index) => `${item.id}`}
                  renderItem={({ item, index }) => 
                  <View style={[
                    styles.flex, styles.column, styles.recommendation, 
                    index === 0 ? { marginLeft: theme.sizes.margin } : null,
                    // isLastItem ? { marginRight: theme.sizes.margin / 2 } : null,
                  ]}>
                    <View style={[styles.flex, styles.recommendationHeader]}>
                      <Image style={[styles.recommendationImage]} source={{ uri: item.preview }} />
                      <View style={[ styles.flex1, styles.row, styles.recommendationOptions ]}>
                        
                        <View style={[styles.card3, {marginLeft: ((width - (theme.sizes.padding * 2)) / 1.2) - 120, marginTop: 20}]}>
                            <Text style={styles.count}>Impacts Peel</Text>
                           
                          </View>
                      </View>
                    </View>
                    <View style={[styles.flex, styles.column, styles.shadow, { justifyContent: 'space-evenly', padding: theme.sizes.padding / 2 }]}>
                      <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: theme.sizes.padding / 4.5, }}>{item.title}</Text>
                      <Text style={{ color: theme.colors.caption }}>{item.location}</Text>
                      <Text style={{ color: theme.colors.active }}>{item.description}</Text>
                      <View style={
                        { marginTop: 20 }
                      }>
                        <View style={styles.card4}>
                            <Text style={styles.count}>Propzi Impact:</Text>
                            <Text style={styles.count1}>-17%</Text>
                            
                          </View>
                      </View>
                    </View>
                  </View>
                  }
                />
              </View>
            </View>
        
        </View>
        ) : 
        <View>
              <TouchableOpacity style={[styles.card,  {marginBottom: 20}]} onPress={() => setShouldShow(!shouldShow)}>
              <View style={styles.cardContent}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.name}>Home Renovations</Text>
                <Text style={{alignItems: 'flex-end', paddingLeft: 45, alignSelf: 'flex-end', marginRight: 5, marginBottom: 5}}>12 Updates</Text>
                </View>
                
                <Text style={[styles.count]}>Last visited on 2 Feb 2021</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <FlatList
                  data={imgs1}
                  keyExtractor={(item)=>{
                    return item.id;
                  }}
                  renderItem={(item) => {
                    const Group = item.item;
                    
                    return(
                      <View>
                        <View style={styles1.groupMembersContent}>
                          {Group.members.map((prop, key) => {
                            return (
                              <Image key={key} style={styles1.memberImage}  source={{uri:prop}}/>
                            );
                          })}
                        </View>
                      </View>
                    );
                  }}/>
                  <View style={{marginTop: -10, alignContent: 'flex-end', paddingLeft: 50}}>
              <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#f6f6f6', alignContent: 'flex-end', alignItems: 'center'}}>
              <View style={{paddingTop: 5}}>
              <FontIcon
                      name="caret-down"
                      color= '#35d1b9'
                      size={40}
                      solid
                    />
              </View>
              
              </View>
              </View>
                </View>
                
              </View>
            </TouchableOpacity>
            </View>
        }
      </View>   

      <View style= {{marginTop: -10}}>
      {shouldShow1 ? (
          <View>
          <TouchableOpacity style={[styles.card1,  {marginBottom: 20}]} onPress={() => setShouldShow1(!shouldShow1)}>
          <View style={styles.cardContent}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
              <Text style={styles.name}>Economic Indicators</Text>
              <Text style={styles.count}>Last updated on Dec 28th, 2020</Text>
              </View>
              <View style={{marginTop: -10, alignContent: 'flex-end', paddingLeft: 50}}>
              <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#f6f6f6', alignContent: 'flex-end', alignItems: 'center'}}>
              <View style={{paddingTop: 5}}>
              <FontIcon
                      name="caret-right"
                      color= '#518de7'
                      size={40}
                      solid
                    />
              </View>
              
              </View>
              </View>
            </View>
            
          </View>
        </TouchableOpacity>
        <View style={[styles.flex, styles.column, styles.recommended ]}>
            
            <View style={[styles.column, styles.recommendedList]}>
                <FlatList
                  horizontal
                  pagingEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  legacyImplementation={false}
                  scrollEventThrottle={16}
                  snapToAlignment="center"
                  style={{ overflow: 'visible', wid: (width - 50) }}
                  data={mocks}
                  keyExtractor={(item, index) => `${item.id}`}
                  renderItem={({ item, index }) => 
                  <View style={[
                    styles.flex, styles.column, styles.recommendation, 
                    index === 0 ? { marginLeft: theme.sizes.margin } : null,
                    // isLastItem ? { marginRight: theme.sizes.margin / 2 } : null,
                  ]}>
                    <View style={[styles.flex, styles.recommendationHeader]}>
                      <Image style={[styles.recommendationImage]} source={{ uri: item.preview }} />
                      <View style={[ styles.flex1, styles.row, styles.recommendationOptions ]}>
                        
                        <View style={[styles.card3, {marginLeft: ((width - (theme.sizes.padding * 2)) / 1.2) - 120, marginTop: 20}]}>
                            <Text style={styles.count}>Impacts Peel</Text>
                           
                          </View>
                      </View>
                    </View>
                    <View style={[styles.flex, styles.column, styles.shadow, { justifyContent: 'space-evenly', padding: theme.sizes.padding / 2 }]}>
                      <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: theme.sizes.padding / 4.5, }}>{item.title}</Text>
                      <Text style={{ color: theme.colors.caption }}>{item.location}</Text>
                      <Text style={{ color: theme.colors.active }}>{item.description}</Text>
                      <View style={
                        { marginTop: 20 }
                      }>
                        <View style={styles.card4}>
                            <Text style={styles.count}>Propzi Impact:</Text>
                            <Text style={styles.count1}>-17%</Text>
                            
                          </View>
                      </View>
                    </View>
                  </View>
                  }
                />
              </View>
            </View>
        
        </View>
        ) : 
        <View>
              <TouchableOpacity style={[styles.card1,  {marginBottom: 20}]} onPress={() => setShouldShow1(!shouldShow1)}>
              <View style={styles.cardContent}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.name}>Econominc Indicators</Text>
                <Text style={{alignItems: 'flex-end', paddingLeft: 45, alignSelf: 'flex-end', marginRight: 5, marginBottom: 5}}>12 Updates</Text>
                </View>
                
                <Text style={[styles.count]}>Last visited on 2 Feb 2021</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <FlatList
                  data={imgs1}
                  keyExtractor={(item)=>{
                    return item.id;
                  }}
                  renderItem={(item) => {
                    const Group = item.item;
                    
                    return(
                      <View>
                        <View style={styles1.groupMembersContent}>
                          {Group.members.map((prop, key) => {
                            return (
                              <Image key={key} style={styles1.memberImage}  source={{uri:prop}}/>
                            );
                          })}
                        </View>
                      </View>
                    );
                  }}/>
                  <View style={{marginTop: -10, alignContent: 'flex-end', paddingLeft: 50}}>
              <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#f6f6f6', alignContent: 'flex-end', alignItems: 'center'}}>
              <View style={{paddingTop: 5}}>
              <FontIcon
                      name="caret-down"
                      color= '#518de7'
                      size={40}
                      solid
                    />
              </View>
              
              </View>
              </View>
              
                </View>
                
              </View>
            </TouchableOpacity>
            </View>
        }
      </View>   

      <View style= {{marginTop: -10}}>
      {shouldShow2 ? (
          <View>
          <TouchableOpacity style={[styles.card2,  {marginBottom: 20}]} onPress={() => setShouldShow2(!shouldShow2)}>
          <View style={styles.cardContent}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
              <Text style={styles.name}>Neighbourhood Development</Text>
              <Text style={styles.count}>Last updated on Dec 28th, 2020</Text>
              </View>
              <View style={{marginTop: -10, alignContent: 'flex-end', paddingLeft: 50}}>
              <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#f6f6f6', alignContent: 'flex-end', alignItems: 'center'}}>
              <View style={{paddingTop: 5}}>
              <FontIcon
                      name="caret-right"
                      color= '#e7bd51'
                      size={40}
                      solid
                    />
              </View>
              
              </View>
              </View>
            </View>
            
          </View>
        </TouchableOpacity>
        <View style={[styles.flex, styles.column, styles.recommended ]}>
            
            <View style={[styles.column, styles.recommendedList]}>
                <FlatList
                  horizontal
                  pagingEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  legacyImplementation={false}
                  scrollEventThrottle={16}
                  snapToAlignment="center"
                  style={{ overflow: 'visible', wid: (width - 50) }}
                  data={mocks}
                  keyExtractor={(item, index) => `${item.id}`}
                  renderItem={({ item, index }) => 
                  <View style={[
                    styles.flex, styles.column, styles.recommendation, 
                    index === 0 ? { marginLeft: theme.sizes.margin } : null,
                    // isLastItem ? { marginRight: theme.sizes.margin / 2 } : null,
                  ]}>
                    <View style={[styles.flex, styles.recommendationHeader]}>
                      <Image style={[styles.recommendationImage]} source={{ uri: item.preview }} />
                      <View style={[ styles.flex1, styles.row, styles.recommendationOptions ]}>
                        
                        <View style={[styles.card3, {marginLeft: ((width - (theme.sizes.padding * 2)) / 1.2) - 120, marginTop: 20}]}>
                            <Text style={styles.count}>Impacts Peel</Text>
                           
                          </View>
                      </View>
                    </View>
                    <View style={[styles.flex, styles.column, styles.shadow, { justifyContent: 'space-evenly', padding: theme.sizes.padding / 2 }]}>
                      <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: theme.sizes.padding / 4.5, }}>{item.title}</Text>
                      <Text style={{ color: theme.colors.caption }}>{item.location}</Text>
                      <Text style={{ color: theme.colors.active }}>{item.description}</Text>
                      <View style={
                        { marginTop: 20 }
                      }>
                        <View style={styles.card4}>
                            <Text style={styles.count}>Propzi Impact:</Text>
                            <Text style={styles.count1}>-17%</Text>
                            
                          </View>
                      </View>
                    </View>
                  </View>
                  }
                />
              </View>
            </View>
        
        </View>
        ) : 
        <View>
              <TouchableOpacity style={[styles.card2,  {marginBottom: 20}]} onPress={() => setShouldShow2(!shouldShow2)}>
              <View style={styles.cardContent}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.name}>Neighbourhood Development</Text>
                <Text style={{alignItems: 'flex-end', paddingLeft: 15, alignSelf: 'flex-end', marginRight: 5, marginBottom: 5}}>12 Updates</Text>
                </View>
                
                <Text style={[styles.count]}>Last visited on 2 Feb 2021</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <FlatList
                  data={imgs1}
                  keyExtractor={(item)=>{
                    return item.id;
                  }}
                  renderItem={(item) => {
                    const Group = item.item;
                    
                    return(
                      <View>
                        <View style={styles1.groupMembersContent}>
                          {Group.members.map((prop, key) => {
                            return (
                              <Image key={key} style={styles1.memberImage}  source={{uri:prop}}/>
                            );
                          })}
                        </View>
                      </View>
                    );
                  }}/>
                  <View style={{marginTop: -10, alignContent: 'flex-end', paddingLeft: 50}}>
              <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#f6f6f6', alignContent: 'flex-end', alignItems: 'center'}}>
              <View style={{paddingTop: 5}}>
              <FontIcon
                      name="caret-down"
                      color= '#e7bd51'
                      size={40}
                      solid
                    />
              </View>
              
              </View>
              </View>
              
                </View>
                
              </View>
            </TouchableOpacity>
            </View>
        }
      </View>   
             
          
      
        
      </View>
      </ScrollView>
  );
};



/* Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
} */

Home.defaultProps = {
  //navigation: { navigate: () => null },
  destinations: mocks
}

export default Home
