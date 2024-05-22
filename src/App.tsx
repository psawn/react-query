import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Events from "./components/Events/Events.js";
import EventDetails from "./components/Events/EventDetails.js";
import NewEvent from "./components/Events/NewEvent.js";
import EditEvent from "./components/Events/EditEvent.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/events" />,
  },
  {
    path: "/events",
    element: <Events />,

    children: [
      {
        path: "/events/new",
        element: <NewEvent />,
      },
    ],
  },
  {
    path: "/events/:id",
    element: <EventDetails />,
    children: [
      {
        path: "/events/:id/edit",
        element: <EditEvent />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
