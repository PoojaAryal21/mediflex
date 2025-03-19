import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProduct({ ...product, image: file });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform API call to add the product (mock example below)
        console.log('Product added:', product);
        alert('Product added successfully!');
        // Clear the form
        setProduct({ name: '', price: '', description: '', image: null });
    };

    return (
        <Card className="max-w-md mx-auto p-6 shadow-lg rounded-2xl">
            <CardContent>
                <h2 className="text-xl font-bold mb-4">Add New Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="name">Product Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="price">Price ($)</Label>
                        <Input
                            id="price"
                            name="price"
                            type="number"
                            value={product.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="description">Description</Label>
                        <Input
                            id="description"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="image">Product Image</Label>
                        <Input
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full">Add Product</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default AddProduct;
