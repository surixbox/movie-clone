import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/home/navbar";
import Banner from "./pages/home/banner";
import MovieRow  from "./data/MovieRow";
import Footer from "./pages/home/Footer";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected home route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Banner />

                <MovieRow
                  title="Amazon Originals"
                  fetchUrl="/discover/tv?with_networks=213"
                />
                <MovieRow
                  title="Trending Now"
                  fetchUrl="/trending/movie/week"
                />
                <MovieRow
                  title="Action Movies"
                  fetchUrl="/discover/movie?with_genres=28"
                />
                <MovieRow
                  title="Comedy Movies"
                  fetchUrl="/discover/movie?with_genres=35"
                />

                <Footer />
              </>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
