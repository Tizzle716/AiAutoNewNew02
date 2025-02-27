import { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabase';
import { Session } from '@supabase/supabase-js';

export default function Login() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (session) {
    return (
      <div className="max-w-md mx-auto my-12 p-8 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Account</h2>
        <p className="mb-4">You are logged in as: <span className="font-semibold">{session.user.email}</span></p>
        <button
          className="w-full bg-red-600 py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Login or Sign Up</h2>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={[]}
        redirectTo={window.location.origin}
      />
    </div>
  );
}