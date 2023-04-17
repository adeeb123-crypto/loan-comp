import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useClient } from 'react-supabase';

function page() {

  const client = useClient();
  
  return (
    <div>
      <Header  client={client} />
      <Footer  client={client} />
    </div>
  );
}

export default page;
 