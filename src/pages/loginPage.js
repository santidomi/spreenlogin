import { createClient } from "@supabase/supabase-js";
import { Auth, } from "@supabase/auth-ui-react";
import { ThemeSupa, } from '@supabase/auth-ui-shared';
import { useNavigate } from "react-router-dom";

const supabase = createClient(
    "https://crmetnzsomkryrqpwlml.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNybWV0bnpzb21rcnlycXB3bG1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzMTQzNjksImV4cCI6MTk5Mzg5MDM2OX0.p-UM7Lzn2KqGa4xAbXRT6XFTlhmZUz6tOS4sFHjgAvI"
);

function Login() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if (event === "SIGNED_IN") {
            navigate("/success");
        } else {
            navigate("/");
        }
    });

  return (
    <div className="App">
      <header className="App-header">
        <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa}}
        theme="dark"
        providers={["twitter"]}
        />
      </header>
    </div>
  );
}

export default Login;
