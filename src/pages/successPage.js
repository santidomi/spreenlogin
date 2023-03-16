import { createClient } from "@supabase/supabase-js";
import { Auth, } from "@supabase/auth-ui-react";
import { ThemeSupa, } from '@supabase/auth-ui-shared';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, usesTate} from "react";

const supabase = createClient(
    "https://crmetnzsomkryrqpwlml.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNybWV0bnpzb21rcnlycXB3bG1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzMTQzNjksImV4cCI6MTk5Mzg5MDM2OX0.p-UM7Lzn2KqGa4xAbXRT6XFTlhmZUz6tOS4sFHjgAvI"
);

function Success () {
  const [user, setUser] = useState ({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) =>{
        // value.data.user
        if(value.data?.user) {
          setUser(value.data.user)
        }
      })
    }
    getUserData();
  }, []);

  async function signOutUser(){
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          Object.keys(user).length !==0 ?
          <> 
        <h1>Sorteo!</h1>
        <button onClick={() => signOutUser()}>Sign Out</button>
        </>
        :
        <>
        <h1>No hay un usuario Logeado</h1>
        <button onClick={() => { navigate("/") }}>Inicio</button>
        </>
      }
      </header>
    </div>
  );
}

export default Success;
