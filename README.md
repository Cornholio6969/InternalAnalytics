# InternalTrafficShield

**InternalTrafficShield** is a simple yet powerful script to prevent internal traffic from skewing your website’s analytics. By marking visits from internal devices as "internal," this solution ensures your data remains clean and accurate for SEO tracking and insights. Perfect for online stores and businesses with in-house ordering workflows, this script works seamlessly with Google Analytics 4 (GA4) and is deployable via Chrome or browser extensions.

---

### 🌟 **Features**

- 🚫 **Blocks Internal Traffic** — Keep internal orders from affecting your analytics.
- 🛠 **Easy Setup** — Deploy via Chrome's developer console or Tampermonkey.
- 📊 **Improved Data Quality** — Focus on real customer insights without in-house traffic noise.

---

### 🔧 **How It Works**

The script sets a custom parameter `traffic_type` as `internal` for in-house devices, allowing Google Analytics to exclude these visits via a filter.

### 📝 **Installation Instructions**

1. **Using Chrome Console**:
   - Open your website in Chrome, press `F12` to open Developer Tools, and paste the script in the Console.

2. **Using Tampermonkey**:
   - Install the Tampermonkey extension, create a new script, paste the code, and save.

### ⚙️ **Configuration**

- **Edit GA4 Filter**: Add a custom filter in GA4 to exclude `traffic_type = internal` visits from your analytics.

---

### 📜 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.