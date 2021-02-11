import React, { Component } from 'react'
import {
  StyleSheet, View, StatusBar, Dimensions,TouchableOpacity,
  FlatList,
  Alert,
  ScrollView, Image, Animated
} from 'react-native'
import { LineChart} from "react-native-chart-kit";
import { Card, Badge, Button, Block, Text } from './components';
import { theme } from './constants';
import { mocks1 } from "./constants";

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

const { width } = Dimensions.get('window');

class Details extends Component {
  state = {
    active: false,
    categories: [],
  }

  componentDidMount() {
    this.setState({ categories: this.props.categories });
  }

  handleTab = tab => {
    const { categories } = this.props;
    state.active = 'Products'
    const filtered = categories.filter(
      category => category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  }

  renderChart = () =>{
    return (
      <View style={[
        styles.flex, styles.column, styles.recommendation1
      ]}>
        <View style={[styles.flex, styles.recommendationHeader]}>
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
            
            <View style={[styles.card5, {marginLeft: width - 300}]}>
                <Text style={{color: '#303030', fontSize: 12}}>$921000</Text>
                <Text style={{color: '#2cde49', fontSize: 10}}>+1.35%</Text>
               
              </View>
          </View>
        </View>
        
      </View>
    
    )
  }
  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[
          styles.tab,
          isActive ? styles.active : null
        ]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { profile, navigation } = this.props;
    const { categories } = this.state;
    const tabs = ['Products', 'Inspirations', 'Shop'];

    return (
      
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>Report</Text>
          
        </Block>

        <Block flex={false} row style={styles.tabs}>
          {tabs.map(tab => this.renderTab(tab))}
        </Block>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2}}
        >
          <Block flex={false} row space="between" style={styles.categories}>
            {categories.map(category => (
              <TouchableOpacity
                key={category.name}
                onPress={() => navigation.navigate('Explore', { category })}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image source={category.image} />
                  </Badge>
                  <Text medium height={20}>{category.name}</Text>
                  <Text gray caption>{category.count} products</Text>
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
    )
  }
}

Details.defaultProps = {
  profile: mocks1.profile,
  categories: mocks1.categories,
}

export default Details;

const styles = StyleSheet.create({
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
  },
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },  
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
  },
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
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
    fontSize:18,
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
    borderTopRightRadius: theme.sizes.border,
    borderTopLeftRadius: theme.sizes.border,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: theme.sizes.border,
    borderTopLeftRadius: theme.sizes.border,
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.sizes.padding / 2,
    position: 'absolute',
    top: 0,
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
