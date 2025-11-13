import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { supabase } from "./supabaseClient";

export default function Home() {
  const [status, setStatus] = useState("Checking Supabase...");

  useEffect(() => {
    const checkSupabase = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.log("Supabase error:", error);
          setStatus("Supabase error ❌");
        } else {
          console.log("Supabase connected:", data);
          setStatus("Supabase connected ✅");
        }
      } catch (e) {
        console.log("Supabase crash:", e);
        setStatus("Supabase threw exception ❌");
      }
    };

    checkSupabase();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Nesh MVP — it lives 🎉</Text>
      <Text style={{ marginTop: 12 }}>{status}</Text>
    </View>
  );
}
