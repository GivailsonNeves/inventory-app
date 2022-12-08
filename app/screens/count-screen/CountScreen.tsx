import { AntDesign } from "@expo/vector-icons";
import { Fab, Icon, View, VStack, Box, Text, Image } from "native-base";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { faker } from "@faker-js/faker";

const createCountable = () => {
  return {
    id: faker.datatype.number(),
    name: faker.commerce.product(),
    image: faker.image.food(),
    uuid: faker.random.numeric(),
    barCode: faker.datatype.number(),
    counter: faker.datatype.number(),
    price: faker.commerce.price(),
  };
};

const CountScreen = ({ navigation }: any) => {
  const data = React.useMemo(
    () => Array.from({ length: 30 }, createCountable),
    []
  );
  return (
    <View paddingX={2}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box key={item.id}>
            <VStack flexDirection="row" paddingY={1} alignItems="center">
              <Image alt={item.name} source={{ uri: item.image }} size="xs" />
              <VStack
                marginLeft={1}
                padding={1}
                borderBottomColor="gray.300"
                borderBottomWidth={1}
                width="100%"
              >
                <Text>{item.name}</Text>
                <Text fontSize="xs">
                  {item.uuid} - 789123{item.barCode}
                </Text>
                <Text fontSize="xs">
                  R$ {item.price} - {item.counter}pcs
                </Text>
              </VStack>
            </VStack>
          </Box>
        )}
      />
      <Fab
        // renderInPortal={false}
        placement="bottom-right"
        shadow={2}
        backgroundColor="#053C63"
        size="xs"
        icon={<Icon color="white" as={AntDesign} name="plus" />}
      />
      <Fab
        // renderInPortal={false}
        right={15}
        backgroundColor="#053C63"
        bottom={70}
        shadow={2}
        size="xs"
        icon={<Icon color="white" as={AntDesign} name="barcode" />}
      />
    </View>
  );
};

export default CountScreen;
