
import Layout from '../components/Layout';

const Products = () => {
  const products = [
    {
      title: "Mahangu Pasta",
      description: "Wholesome, gluten-friendly, and high in fiber. Available in Fusilli, Radiatori, shells, Maccheroni and other various shapes. 100% Namibian millet.",
      features: ["Gluten-friendly", "High in fiber", "100% Namibian millet", "Various shapes available"],
      color: "bg-red-600"
    },
    {
      title: "Ready-Made Pasta Sauces",
      description: "Bursting with local flavor, made from real tomatoes. Available in Bolognaise, Tomato Purée and Chilli.",
      features: ["Made from real tomatoes", "Local flavors", "Bolognaise variety", "Tomato Purée & Chilli"],
      color: "bg-green-600"
    },
    {
      title: "Mozzarella Cheese",
      description: "Soft, stretchy, and perfect for home cooking. Ideal for pizzas, pasta bakes, sandwiches, fresh salads or anything you would like to pair it with.",
      features: ["Soft and stretchy", "Perfect for cooking", "Ideal for pizzas", "Great for salads"],
      color: "bg-yellow-500"
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`${product.color} h-4`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 ${product.color} rounded-full`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
