
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Products = () => {
  const products = [
    {
      title: "Mahangu Pasta",
      description: "Wholesome, gluten-friendly, and high in fiber. Available in Fusilli, Radiatori, shells, Maccheroni and other various shapes. 100% Namibian millet.",
      features: ["Gluten-friendly", "High in fiber", "100% Namibian millet", "Various shapes available"],
      color: "bg-red-600",
      image: "photo-1618160702438-9b02ab6515c9" // pasta/grain products
    },
    {
      title: "Ready-Made Pasta Sauces",
      description: "Bursting with local flavor, made from real tomatoes. Available in Bolognaise, Tomato Purée and Chilli.",
      features: ["Made from real tomatoes", "Local flavors", "Bolognaise variety", "Tomato Purée & Chilli"],
      color: "bg-green-600",
      image: "photo-1535268647677-300dbf3d78d1" // sauce/condiment products
    },
    {
      title: "Mozzarella Cheese",
      description: "Soft, stretchy, and perfect for home cooking. Ideal for pizzas, pasta bakes, sandwiches, fresh salads or anything you would like to pair it with.",
      features: ["Soft and stretchy", "Perfect for cooking", "Ideal for pizzas", "Great for salads"],
      color: "bg-yellow-500",
      image: "photo-1493962853295-0fd70327578a" // dairy/cheese products
    }
  ];

  return (
    <Layout>
      <div className="py-16 bg-gradient-to-br from-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of locally sourced, traditionally crafted Namibian food products
            </p>
          </div>

          {/* Featured Product Image */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="LizWise Investment CC authentic Namibian products"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardContent className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Authentic Namibian Heritage</h3>
                <p className="text-gray-600">
                  From our family to yours - traditional recipes crafted with locally sourced ingredients, 
                  bringing the authentic taste of Namibia to your table.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`${product.color} h-2`}></div>
                <AspectRatio ratio={4 / 3} className="bg-gray-100">
                  <img
                    src={`https://images.unsplash.com/${product.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={product.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 ${product.color} rounded-full`}></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Product Showcase Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Product Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <AspectRatio ratio={16 / 10}>
                  <img
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Mahangu pasta varieties"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Traditional Mahangu Grains</h3>
                  <p className="text-gray-600 text-sm">Premium quality millet grains processed into nutritious pasta</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <AspectRatio ratio={16 / 10}>
                  <img
                    src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Fresh pasta sauces"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Fresh Pasta Sauces</h3>
                  <p className="text-gray-600 text-sm">Made from locally grown tomatoes with authentic Namibian flavors</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-red-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Taste the Difference</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Experience the authentic flavors of Namibia with our locally sourced, 
              traditionally crafted products. Perfect for families who value quality and nutrition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+26481394675" 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Call +264 81 394 6757
              </a>
              <a 
                href="mailto:ekambode@gmail.com" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
