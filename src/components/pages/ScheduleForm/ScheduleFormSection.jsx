import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { tracking, iron, laundrymachine, timer } from "../../../../assets/icons";

const categories = [
  {
    id: 1,
    name: "Men's Wear",
    items: [
      { item: "Shirt", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "T Shirt", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Trousers", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Jeans", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Coat", dryCleanPrice: 265, steamIronPrice: 55 },
    ],
  },
  {
    id: 2,
    name: "Women's Wear",
    items: [
      { item: "Kurta", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Salwar", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Plazo", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Dupatta", dryCleanPrice: 65, steamIronPrice: 15 },
      { item: "Saree", dryCleanPrice: 210, steamIronPrice: 45 },
    ],
  },
];

const formatINR = (n) => `₹${Number(n || 0).toLocaleString("en-IN")}`;

const ScheduleFormSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    category: "",
    item: "",
    quantity: 1,
    paymentMethod: "",
    dryClean: false,
    steamIron: false,
  });

  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const selectedCategory = useMemo(
    () => categories.find((cat) => cat.name === form.category),
    [form.category]
  );

  const selectedItem = useMemo(
    () => selectedCategory?.items.find((it) => it.item === form.item),
    [selectedCategory, form.item]
  );

  const handleAddItem = () => {
    if (!form.category || !form.item || !form.quantity) {
      alert("Please select category, item and quantity");
      return;
    }
    if (!form.dryClean && !form.steamIron) {
      alert("Select at least one service (Dry Clean / Steam Iron)");
      return;
    }

    const qty = Math.max(1, parseInt(form.quantity));
    const services = [];

    if (form.dryClean) {
      services.push({
        category: form.category,
        item: form.item,
        serviceType: "Dry Clean",
        unitPrice: selectedItem.dryCleanPrice,
        quantity: qty,
        price: selectedItem.dryCleanPrice * qty,
      });
    }

    if (form.steamIron) {
      services.push({
        category: form.category,
        item: form.item,
        serviceType: "Steam Iron",
        unitPrice: selectedItem.steamIronPrice,
        quantity: qty,
        price: selectedItem.steamIronPrice * qty,
      });
    }

    setSelectedItems((prev) => [...prev, ...services]);
    setForm((prev) => ({
      ...prev,
      category: "",
      item: "",
      quantity: 1,
      dryClean: false,
      steamIron: false,
    }));
  };

  const removeItem = (idx) => {
    setSelectedItems((prev) => prev.filter((_, i) => i !== idx));
  };

  const subtotal = useMemo(
    () => selectedItems.reduce((sum, it) => sum + it.price, 0),
    [selectedItems]
  );

  const isOnline = form.paymentMethod === "Online Payment";
  const discountRate = 0.3;
  const discount = isOnline ? subtotal * discountRate : 0;
  const payableTotal = Math.max(0, subtotal - discount);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedItems.length === 0) {
      alert("Please add at least one item.");
      return;
    }
    alert("Pickup Request Submitted ✅");
  };

  return (
    <div className="py-12 px-4">
      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Laundry Pickup Request
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {/* Customer Info */}
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            value={form.message}
            onChange={handleChange}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Category + Item */}
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          {selectedCategory && (
            <select
              name="item"
              value={form.item}
              onChange={handleChange}
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Item</option>
              {selectedCategory.items.map((it, i) => (
                <option key={i} value={it.item}>
                  {it.item}
                </option>
              ))}
            </select>
          )}

          {/* Services */}
          {selectedItem && (
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="dryClean"
                  checked={form.dryClean}
                  onChange={handleChange}
                />
                Dry Clean ({formatINR(selectedItem.dryCleanPrice)})
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="steamIron"
                  checked={form.steamIron}
                  onChange={handleChange}
                />
                Steam Iron ({formatINR(selectedItem.steamIronPrice)})
              </label>
              <input
                type="number"
                name="quantity"
                min="1"
                value={form.quantity}
                onChange={handleChange}
                className="border rounded-lg p-3 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={handleAddItem}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 active:scale-95 transition"
              >
                Add Item
              </button>
            </div>
          )}

          {/* Selected Items */}
          <AnimatePresence>
            {selectedItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-gray-50 p-4 rounded-lg shadow-inner"
              >
                <h3 className="font-bold text-lg mb-3">Selected Items</h3>
                <ul className="space-y-2">
                  {selectedItems.map((it, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex justify-between items-center border-b pb-2 text-gray-700"
                    >
                      <span>
                        {it.item} ({it.serviceType}) × {it.quantity}
                      </span>
                      <div className="flex gap-3">
                        <span className="font-semibold">{formatINR(it.price)}</span>
                        <button
                          type="button"
                          onClick={() => removeItem(index)}
                          className="text-red-600 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                {/* Totals */}
                <div className="mt-4 text-right">
                  <p>Subtotal: {formatINR(subtotal)}</p>
                  {isOnline && (
                    <p className="text-green-600">
                      Discount: -{formatINR(discount)}
                    </p>
                  )}
                  <p className="text-lg font-bold">
                    Total: {formatINR(payableTotal)}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Payment */}
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Pay on Delivery"
                checked={form.paymentMethod === "Pay on Delivery"}
                onChange={handleChange}
              />
              Pay on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Online Payment"
                checked={form.paymentMethod === "Online Payment"}
                onChange={handleChange}
              />
              Online Payment <span className="text-green-600">(30% OFF)</span>
            </label>
          </div>

          {/* Submit */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
          >
            Submit Request
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ScheduleFormSection;
