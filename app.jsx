import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UserProfile() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Health St, Wellness City",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <CardContent>
          <div className="space-y-4">
            <Input
              name="name"
              value={userData.name}
              onChange={handleChange}
              readOnly={!isEditing}
            />
            <Input
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              readOnly={!isEditing}
            />
            <Input
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              readOnly={!isEditing}
            />
            <Input
              name="address"
              value={userData.address}
              onChange={handleChange}
              readOnly={!isEditing}
            />
            {isEditing ? (
              <Button
                className="w-full bg-green-500 hover:bg-green-600"
                onClick={handleSave}
              >
                Save
              </Button>
            ) : (
              <Button
                className="w-full bg-blue-500 hover:bg-blue-600"
                onClick={handleEditToggle}
              >
                Edit Profile
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
