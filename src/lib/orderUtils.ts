export interface OrderData {
  serialNumber: number;
  name: string;
  phone: string;
  address: string;
  requirements: string;
  timestamp: string;
  date: string;
}

export const generateSerialNumber = (): number => {
  return Date.now();
};

export const getCurrentDateTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString('en-IN');
  const time = now.toLocaleTimeString('en-IN');
  return { date, time };
};

export const saveOrderToJSON = async (orderData: OrderData): Promise<boolean> => {
  try {
    // Save to localStorage for persistence
    const existingOrders = getOrdersFromStorage();
    existingOrders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(existingOrders, null, 2));
    
    // Also save to a downloadable JSON file
    await downloadOrdersAsJSON(existingOrders);
    
    console.log('Order saved:', orderData);
    console.log('All orders:', existingOrders);
    
    return true;
  } catch (error) {
    console.error('Error saving order:', error);
    return false;
  }
};

export const getOrdersFromStorage = (): OrderData[] => {
  try {
    const orders = localStorage.getItem('orders');
    return orders ? JSON.parse(orders) : [];
  } catch (error) {
    console.error('Error reading orders from storage:', error);
    return [];
  }
};

export const downloadOrdersAsJSON = async (orders: OrderData[]): Promise<void> => {
  try {
    const dataStr = JSON.stringify(orders, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    // Create a temporary download link
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `daivam-orders-${new Date().toISOString().split('T')[0]}.json`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading orders as JSON:', error);
  }
};

export const clearAllOrders = (): void => {
  localStorage.removeItem('orders');
};

export const exportOrdersToFile = (): void => {
  const orders = getOrdersFromStorage();
  downloadOrdersAsJSON(orders);
}; 