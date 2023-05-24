import React from "react";
import {
  View,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text
} from "react-native";

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showContent: false,
      name: "",
      desc: "",
      position: 0,

      alldata: [
        {
          id: 1,
          name: "first",
          image: "https://source.unsplash.com/user/c_v_r/100x100",
          desc: "desciption"
        },
        {
          id: 2,
          name: "Second",
          image: "https://source.unsplash.com/user/c_v_r/100x100",
          desc: "desciption"
        },
        {
          id: 3,
          name: "Third",
          image: "https://source.unsplash.com/user/c_v_r/100x100",
          desc: "desciption"
        },
        {
          id: 4,
          name: "fourth",
          image: "https://source.unsplash.com/user/c_v_r/100x100",
          desc: "desciption "
        },
        {
          id: 5,
          name: "fifth",
          image: "https://source.unsplash.com/user/c_v_r/100x100",
          desc: "desciption "
        },
        {
          id: 6,
          name: "sixth",
          image: "https://source.unsplash.com/user/c_v_r/100x100",
          desc: "desciption "
        },
        {
          id: 7,
          name: "seventh",
          image: "https://source.unsplash.com/user/c_v_r/100x100",
          desc: "desciption "
        }
      ]
    };
  }

  showContent = (item) => {
    this.setState({
      showContent: true,
      name: item.name,
      desc: item.desc,
      position: item.id,
    });
  };

  singleImageView = (item) => {
    return (
      <Pressable
        onPress={() => this.showContent(item)}
        style={{ justifyContent: "center", alignItems: "center", margin: 10 }}
      >
        <Image
          source={{ uri: item.image }}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
        <Text>{item.name}</Text>
      </Pressable>
    );
  };

  render() {
    const { showContent, name, desc, position } = this.state;
    return (
      <View>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={this.state.alldata}
            renderItem={({ item }) => this.singleImageView(item)}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          {showContent && (
            <View style={{ width: '100%', justifyContent: "center", alignItems: "center", backgroundColor: 'wheat', paddingHorizontal: 80, paddingVertical: 50 }}>
              <Text style={{ fontSize: 24 }}>{name}</Text>
              <Text style={{ marginTop: 10, fontSize: 18 }}>{desc}</Text>
              <Text style={{ fontSize: 48, marginTop: 40 }}>{position}</Text>
              <Text>{"Position"}</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
