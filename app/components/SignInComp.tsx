"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import axios from "axios"
import { useRouter } from 'next/navigation'; 

export const SignInComp = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  
  const router = useRouter(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/auth/signup', {
        name,
        email,
        password
      });

      if (response.status === 200) {
        setMessage('User is Successfully Registered!');
        router.push('/sign-in'); // Redirect to sign-in page
      } else if (response.data.status === 400) {
        setMessage('Invalid credentials! Please Try Again');
      } else if (response.data.status === 500) {
        setMessage('Backend is Down');
      }

      setName('');
      setEmail('');
      setPassword('');
      setLoading(false);
    } catch (error) {
      setError('Backend is Down! Please Come Back After Some time!');
      setLoading(false);
    }
  }

  if (message) {
    return <div>{message}</div>;
  }

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>An error occurred. Please try again!</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-md w-full space-y-8 p-8 bg-background rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black">Sign Up for Remote Jobs</h1>
          <p className="text-muted-foreground">Join our community of remote workers and find your dream job.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
        <blockquote className="text-center text-lg font-medium text-muted-foreground">
          &ldquo;Remote work has transformed my life, giving me the freedom to work from anywhere and achieve a better
          work-life balance.&rdquo;
        </blockquote>
      </div>
    </div>
  );
}
