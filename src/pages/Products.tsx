
import { useState } from 'react';
import Layout from '../components/Layout';
import Lightbox from '../components/Lightbox';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Products = () => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const products = [
    {
      title: "Mahangu Pasta",
      description: "Wholesome, gluten-friendly, and high in fiber. Available in Fusilli, Radiatori, shells, Maccheroni and other various shapes. 100% Namibian millet.",
      features: ["Gluten-friendly", "High in fiber", "100% Namibian millet", "Various shapes available"],
      color: "bg-red-600",
      image: "/lovable-uploads/baf2893a-444d-4321-8434-f5e0f36f1c21.png"
    },
    {
      title: "Ready-Made Pasta Sauces",
      description: "Bursting with local flavor, made from real tomatoes. Available in Bolognaise, Tomato Purée and Chilli.",
      features: ["Made from real tomatoes", "Local flavors", "Bolognaise variety", "Tomato Purée & Chilli"],
      color: "bg-green-600",
      image: "/lovable-uploads/ecd4af59-d45b-48c9-aa90-c525f895753f.png"
    },
    {
      title: "Mozzarella Cheese",
      description: "Soft, stretchy, and perfect for home cooking. Ideal for pizzas, pasta bakes, sandwiches, fresh salads or anything you would like to pair it with.",
      features: ["Soft and stretchy", "Perfect for cooking", "Ideal for pizzas", "Great for salads"],
      color: "bg-yellow-500",
      image: "/lovable-uploads/0c10c80d-b1c6-4cc9-bfe3-a3549278aed9.png"
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
                  src="/lovable-uploads/9c051a7f-709a-429c-b78b-765f2d109ced.png"
                  alt="LizWise Fusilli Mahangu Pasta - Pearl Millet 500g"
                  className="object-cover w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => handleImageClick("/lovable-uploads/9c051a7f-709a-429c-b78b-765f2d109ced.png", "LizWise Fusilli Mahangu Pasta - Pearl Millet 500g")}
                />
              </AspectRatio>
              <CardContent className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Taste Namibia with LizWise</h3>
                <p className="text-gray-600">
                  From our family to yours - traditional recipes crafted with locally sourced ingredients, 
                  bringing the authentic taste of Namibia to your table. Locally made. Naturally nourishing. Proudly Namibian.
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
                    className="object-cover w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => handleImageClick(product.image, product.title)}
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
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Pasta Varieties</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                <div>
                  <img
                    src="/lovable-uploads/9c051a7f-709a-429c-b78b-765f2d109ced.png"
                    alt="Fusilli Mahangu Pasta - Pearl Millet 500g"
                    className="w-full h-64 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => handleImageClick("/lovable-uploads/9c051a7f-709a-429c-b78b-765f2d109ced.png", "Fusilli Mahangu Pasta - Pearl Millet 500g")}
                  />
                  <h4 className="font-semibold text-lg text-red-600">Fusilli</h4>
                  <p className="text-gray-600">Spiral-shaped pasta perfect for holding sauces</p>
                </div>
                <div>
                  <img
                    src="/lovable-uploads/5814e052-35ea-4807-b371-eb8bbdc0057e.png"
                    alt="Radiatori Mahangu Pasta - Pearl Millet 500g"
                    className="w-full h-64 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => handleImageClick("/lovable-uploads/5814e052-35ea-4807-b371-eb8bbdc0057e.png", "Radiatori Mahangu Pasta - Pearl Millet 500g")}
                  />
                  <h4 className="font-semibold text-lg text-red-600">Radiatori</h4>
                  <p className="text-gray-600">Unique radiator-shaped pasta with excellent texture</p>
                </div>
                <div>
                  <img
                    src="/lovable-uploads/baf2893a-444d-4321-8434-f5e0f36f1c21.png"
                    alt="Shell Mahangu Pasta - Pearl Millet 500g"
                    className="w-full h-64 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => handleImageClick("/lovable-uploads/baf2893a-444d-4321-8434-f5e0f36f1c21.png", "Shell Mahangu Pasta - Pearl Millet 500g")}
                  />
                  <h4 className="font-semibold text-lg text-red-600">Shells</h4>
                  <p className="text-gray-600">Classic shell shapes for versatile cooking applications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sauce Varieties Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Sauce Collection</h2>
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <img
                    src="/lovable-uploads/dc259359-ec0d-4d8b-b506-1aa354fc95dc.png"
                    alt="Bolognaise Sauce - The Sauce Harvest 250ml"
                    className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => handleImageClick("/lovable-uploads/dc259359-ec0d-4d8b-b506-1aa354fc95dc.png", "Bolognaise Sauce - The Sauce Harvest 250ml")}
                  />
                  <h4 className="font-semibold text-lg text-gray-800">Bolognaise</h4>
                  <p className="text-gray-600">Rich, hearty meat sauce with authentic flavors</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <img
                    src="/lovable-uploads/ecd4af59-d45b-48c9-aa90-c525f895753f.png"
                    alt="Tomato Purée - The Sauce Harvest 250ml"
                    className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => handleImageClick("/lovable-uploads/ecd4af59-d45b-48c9-aa90-c525f895753f.png", "Tomato Purée - The Sauce Harvest 250ml")}
                  />
                  <h4 className="font-semibold text-lg text-gray-800">Tomato Purée</h4>
                  <p className="text-gray-600">Pure tomato goodness for versatile cooking</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <img
                    src="/lovable-uploads/6ff8ff95-d9bd-429e-a597-2d73da906c5d.png"
                    alt="Tomato Purée Chilli - The Sauce Harvest 250ml"
                    className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => handleImageClick("/lovable-uploads/6ff8ff95-d9bd-429e-a597-2d73da906c5d.png", "Tomato Purée Chilli - The Sauce Harvest 250ml")}
                  />
                  <h4 className="font-semibold text-lg text-gray-800">Chilli</h4>
                  <p className="text-gray-600">Spicy tomato sauce with a kick of local flavor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cheese Varieties Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Dairy Crafters Cheese</h2>
            <div className="bg-yellow-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/lovable-uploads/0c10c80d-b1c6-4cc9-bfe3-a3549278aed9.png"
                    alt="LizWise Dairy Crafters Mozzarella Cheese - Product of Namibia"
                    className="w-full h-64 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => handleImageClick("/lovable-uploads/0c10c80d-b1c6-4cc9-bfe3-a3549278aed9.png", "LizWise Dairy Crafters Mozzarella Cheese - Product of Namibia")}
                  />
                  <h4 className="font-semibold text-lg text-gray-800">Classic Mozzarella</h4>
                  <p className="text-gray-600">Soft, stretchy cheese perfect for pizzas and pasta dishes</p>
                </div>
                <div>
                  <img
                    src="/lovable-uploads/334bac1f-2873-4490-bad4-d86057baaf2e.png"
                    alt="Smoked Mozzarella Cheese - Dairy Crafters 250g"
                    className="w-full h-64 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => handleImageClick("/lovable-uploads/334bac1f-2873-4490-bad4-d86057baaf2e.png", "Smoked Mozzarella Cheese - Dairy Crafters 250g")}
                  />
                  <h4 className="font-semibold text-lg text-gray-800">Smoked Mozzarella</h4>
                  <p className="text-gray-600">Rich, smoky flavor perfect for gourmet dishes and salads</p>
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

      {/* Lightbox Component */}
      <Lightbox
        src={lightboxImage?.src || ''}
        alt={lightboxImage?.alt || ''}
        isOpen={!!lightboxImage}
        onClose={closeLightbox}
      />
    </Layout>
  );
};

export default Products;
