import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// TanStack Query giúp quản lý các trạng thái của API
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // call API when navigate between different tabs (in search engine)
      refetchOnWindowFocus: false,
      // call API again when reconnecting to internet (load current items to server if lost connection)
      refetchOnReconnect: true,

      // Max # of API calls before output error
      retry: 3,
    },
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </Provider>
)
