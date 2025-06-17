
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
      image: "/lovable-uploads/0ff37a7d-8400-43e2-86cb-0951efc00d93.png"
    },
    {
      title: "Ready-Made Pasta Sauces",
      description: "Bursting with local flavor, made from real tomatoes. Available in Bolognaise, Tomato Purée and Chilli.",
      features: ["Made from real tomatoes", "Local flavors", "Bolognaise variety", "Tomato Purée & Chilli"],
      color: "bg-green-600",
      image: "/lovable-uploads/0ff37a7d-8400-43e2-86cb-0951efc00d93.png"
    },
    {
      title: "Mozzarella Cheese",
      description: "Soft, stretchy, and perfect for home cooking. Ideal for pizzas, pasta bakes, sandwiches, fresh salads or anything you would like to pair it with.",
      features: ["Soft and stretchy", "Perfect for cooking", "Ideal for pizzas", "Great for salads"],
      color: "bg-yellow-500",
      image: "/lovable-uploads/0ff37a7d-8400-43e2-86cb-0951efc00d93.png"
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
                  src="/lovable-uploads/0ff37a7d-8400-43e2-86cb-0951efc00d93.png"
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
                    src={product.image}
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

          {/* Product Details Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Product Details</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-red-600">Mahangu Pasta Varieties</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-600 pl-4">
                      <h4 className="font-semibold text-lg">Fusilli</h4>
                      <p className="text-gray-600">Spiral-shaped pasta perfect for holding sauces</p>
                    </div>
                    <div className="border-l-4 border-red-600 pl-4">
                      <h4 className="font-semibold text-lg">Radiatori</h4>
                      <p className="text-gray-600">Unique radiator-shaped pasta with excellent texture</p>
                    </div>
                    <div className="border-l-4 border-red-600 pl-4">
                      <h4 className="font-semibold text-lg">Shells & Maccheroni</h4>
                      <p className="text-gray-600">Classic shapes for versatile cooking applications</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <img
                    src="/lovable-uploads/0ff37a7d-8400-43e2-86cb-0951efc00d93.png"
                    alt="Mahangu pasta varieties"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sauce Varieties Section */}
          <div className="mb-16">
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/lovable-uploads/0ff37a7d-8400-43e2-86cb-0951efc00d93.png"
                    alt="Pasta sauce varieties"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-green-600">Sauce Collection</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-lg text-gray-800">Bolognaise</h4>
                      <p className="text-gray-600">Rich, hearty meat sauce with authentic flavors</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-lg text-gray-800">Tomato Purée</h4>
                      <p className="text-gray-600">Pure tomato goodness for versatile cooking</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-lg text-gray-800">Chilli</h4>
                      <p className="text-gray-600">Spicy tomato sauce with a kick of local flavor</p>
                    </div>
                  </div>
                </div>
              </div>
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
