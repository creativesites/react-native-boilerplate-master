class Home1 extends Component {
    scrollX = new Animated.Value(0);
    state = {
      active: 'Products',
      categories: [],
    }
  
    componentDidMount() {
      this.setState({ categories: this.props.categories });
    }
  
    handleTab = tab => {
      const { categories } = this.props;
      const filtered = categories.filter(
        category => category.tags.includes(tab.toLowerCase())
      );
  
      this.setState({ active: tab, categories: filtered });
    }
    
    constructor(props) {
      super(props);
      this.state = {
        activeCard: 'card1',
        data:[
          {
            id:1, 
            name: "Economic Indicators", 
            active: true, 
            cardStyle: 'card',
            updatedDate: '2 Feb 2021',  
            members:[
              
            ]
          },
          {
            id:2, 
            name: "Home Renovations", 
            active: false, 
            cardStyle: 'card1',
            updatedDate: '2 Feb 2021',  
            members:[
              
            ]
          },
          {
            id:3, 
            name: "Neighbourhood Development", 
            active: false, 
            cardStyle: 'card2',
            updatedDate: '2 Feb 2021',  
            members:[
              
            ]
          }
        ]
      }
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
  
    renderTabView = () =>{
      const { profile, navigation } = this.props;
      const { categories } = this.state;
      const tabs = ['Products', 'Inspirations', 'Shop'];
      return(
        <Block flex={false} row style={styles.tabs}>
            {tabs.map(tab => this.renderTab(tab))}
          </Block>
      )
    }
    renderMainCards = () => {
      
      return(
        <FlatList
          //style={styles1.root}
          data={this.state.data}
          extraData={this.state}
  
          const activeState = {this.state.activeCard}
          let activeCardNow = ''
          
          keyExtractor={(item)=>{
            return item.id;
          }}
          renderItem={({item}, index) => {
            const itemId = item.cardStyle;
            let classes = '';
  
            switch(itemId) {
              case 'card':
                classes = styles.card;
                break;
              case 'card1':
                classes = styles.card1;
                break;
              case 'card2':
                classes = styles.card2;
                break;
              default:
                classes = styles.card;
            }
            const actv = this.state.activeCard
            let thisCard = false;
            let test = true
            let showCards = ''
            switch(itemId) {
              case (itemId == actv) :
                thisCard = true;
                break;
              
              default:
                thisCard = false;
            }
            
            /* const whichCard = if (actv == itemId){
              return true
            } */
            return(
              <View>
                <TouchableOpacity style={[classes,  {marginBottom: 20}]} onPress={() => {this.activeCard = itemId}}>
                <View style={styles.cardContent}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={{alignItems: 'flex-end', paddingLeft: 45, alignSelf: 'flex-end', marginRight: 5, marginBottom: 5}}>12 Updates</Text>
                  </View>
                  
                  <Text style={[styles.count]}>Last visited on {item.updatedDate}</Text>
                  
                  
                  {this.renderCards()}
                </View>
              </TouchableOpacity>
              {/* {test ? <View>{this.renderRecommended()}
              </View> : <View></View>
                } */}
                {itemId == actv ? <View>{this.renderRecommended()}
              </View> : <View></View>}
              </View>
            );
          }}/>
      )
    }
    renderGroupMembers = (group) => {
      if(group.members) {
        return (
          <View style={styles1.groupMembersContent}>
            {group.members.map((prop, key) => {
              return (
                <Image key={key} style={styles1.memberImage}  source={{uri:prop}}/>
              );
            })}
          </View>
        );
      }
      return null;
    }
    renderCards = () =>{
      scrollX = new Animated.Value(0)
      return(
        
        <FlatList
          data={imgs1}
          keyExtractor={(item)=>{
            return item.id;
          }}
          renderItem={(item) => {
            const Group = item.item;
            
            return(
              <View>
                {this.renderGroupMembers(Group)}
              </View>
            );
          }}/>
      )
    }
    renderRecommended = () => {
      return (
        <View style={[styles.flex, styles.column, styles.recommended ]}>
          
          <View style={[styles.column, styles.recommendedList]}>
            <FlatList
              horizontal
              pagingEnabled
              scrollEnabled
              showsHorizontalScrollIndicator={true}
              scrollEventThrottle={16}
              snapToAlignment="center"
              style={{ overflow: 'visible' }}
              data={this.props.destinations}
              keyExtractor={(item, index) => `${item.id}`}
              renderItem={({ item, index }) => this.renderRecommendation(item, index)}
            />
          </View>
        </View>
      );
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
  
    renderRecommendation = (item, index) => {
      const { destinations } = this.props;
      const isLastItem = index === destinations.length - 1;
      return (
        <View style={[
          styles.flex, styles.column, styles.recommendation, 
          index === 0 ? { marginLeft: theme.sizes.margin } : null,
          isLastItem ? { marginRight: theme.sizes.margin / 2 } : null,
        ]}>
          <View style={[styles.flex, styles.recommendationHeader]}>
            <Image style={[styles.recommendationImage]} source={{ uri: item.preview }} />
            <View style={[ styles.flex1, styles.row, styles.recommendationOptions ]}>
              
              <View style={[styles.card3, {marginLeft: ((width - (theme.sizes.padding * 2)) / 1.2) - 120}]}>
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
      
      )
    }
    renderReportHome = () =>{
      
      return(
        <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <view style={{ justifyContent: 'flex-start', alignItems: 'left', marginLeft: 20}}>
      <Text style={styles.title}>6336 Culmore Cres.</Text>
      </view>
      <view style={{ justifyContent: 'flex-start', alignItems: 'left', marginLeft: 20}}>
      
      <Text style={styles.stitle}>Last Updated at 12/28/2020.</Text>
      </view>
      <view style={{flexDirection: 'row',justifyContent: 'space-between',flexWrap: 'nowrap', alignItems: 'stretch', marginLeft: 20, marginTop: 20}}>
      <view><Text style={{fontSize: 24, fontWeight: 'bold'}}>Propzi Price</Text></view>
      </view>
     
      <View style={{alignItems: 'left', marginLeft: 20, paddingTop: 20}}>
              
              {this.renderChart()}
            </View>
            {this.renderMainCards()}
            <TouchableOpacity style={[styles.card, {marginBottom: 20}]} onPress={() => {this.clickEventListener(item)}}>
                <View style={styles.cardContent}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.name}>Home Renovations</Text>
                  <Text style={{alignItems: 'flex-end', paddingLeft: 45, alignSelf: 'flex-end', marginRight: 5, marginBottom: 5}}>12 Updates</Text>
                  </View>
                  
                  <Text style={[styles.count]}>Last visited on Dec 28th, 2020.</Text>
                  
                  
                  {this.renderCards()}
                </View>
              </TouchableOpacity>
              {/* {this.renderCards()} */}
              
              {this.renderRecommended()}
              <TouchableOpacity style={styles.card1} onPress={() => {this.clickEventListener(item)}}>
                
                <View style={styles.cardContent}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.name}>Economic Indicators</Text>
                  <Text style={{alignItems: 'flex-end', paddingLeft: 45, alignSelf: 'flex-end', marginRight: 5, marginBottom: 5}}>12 Updates</Text>
                  </View>
                  
                  <Text style={[styles.count]}>Last visited on Dec 28th, 2020.</Text>
                  {this.renderCards()}
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card2} onPress={() => {this.clickEventListener(item)}}>
                
                <View style={styles.cardContent}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.name}>Neighbourhood Development</Text>
                  <Text style={{alignItems: 'flex-end', paddingLeft: 45, alignSelf: 'flex-end', marginRight: 5, marginBottom: 5}}>12 Updates</Text>
                  </View>
                  
                  <Text style={[styles.count]}>Last visited on Dec 28th, 2020.</Text>
                  {this.renderCards()}
                </View>
              </TouchableOpacity>
  
  
      
      
    </View>
  
  
      )
    }
  
    render(){
      
      return(
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: '20' }}
        >
         {/* <LottieView source={require('../../../assets/images/42390-loading-loading-2.json')} autoPlay loop />; */}
         {this.renderTabView()}
          {this.renderReportHome()}
          {/* <Details></Details> */}
        </ScrollView>
      )
    }
  
  }