import { SafeAreaView, ScrollView, Text } from "react-native";
import FlatCard from "@/components/_flatCard";
import ElevatedCard from "@/components/_elevatedCards";
import FancyCard from "@/components/_fancyCard";
import ActionCard from "@/components/_actionCard";
import ContactList from "@/components/_contactList";
export default function AppLayout(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}
