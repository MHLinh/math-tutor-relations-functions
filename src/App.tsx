
/**
 * This code uses following libraries: 
 * react, react-router-dom, @mui/material, and @mui/styles.
 */
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Box from "@mui/material/Box"
import ThemeProvider from "@mui/styles/ThemeProvider"
import {
  ScrollToTop,
  NavigationBar,
  PrivacyPolicyPopUp
} from "components"
import { 
  HomePage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  DashboardPage,
  RelationRepresentationPage,
  RelationPropertiesNavigationPage,
  RelationPropertiesPage,
  RelationReflexivePage,
  RelationIrreflexivePage,
  RelationSymmetricPage,
  RelationAntisymmetricPage,
  RelationTransitivePage,
  RelationEquivalencePage,
  RelationPartialOrderPage,
  RelationTotalOrderPage,
  RelationWarshallsPage,
  FunctionPropertiesPage,
  VerticalLineTestPage,
  LinearFunctionSlopeNavigationPage,
  LinearFunctionSlopeChangePage,
  LinearFunctionSlopePointsPage,
  QuadraticFunctionNavigationPage,
  QuadraticFunctionVertexPage,
  QuadraticFunctionRootsPage,
  FunctionTransformationNavigationPage,
  VerticalTranslationPage,
  HorizontalTranslationPage,
  VerticalCompressionStretchingPage,
  HorizontalCompressionStretchingPage,
  ReflectionPage,
  FunctionTransformationPage,
  FunctionDomainNavigationPage,
  FunctionDomainContinuousPage,
  FunctionDomainDiscretePage,
  FunctionCompositionNavigationPage,
  FunctionCompositionCheckPage,
  FunctionCompositionPlotPage,
  ErrorPage,
 } from "pages"
import { theme } from "theme"

/**
 * The main application component with all the routes.
 */
function App() {

  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <Box 
          sx={{
            paddingTop: 1,
            paddingLeft: 1,
            paddingRight: 1,
          }}
        >
          <NavigationBar />
          <PrivacyPolicyPopUp />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/reset-password" element={<ResetPasswordPage />}/>
            <Route path="/dashboard" element={<DashboardPage />}/>
            <Route path="/relation-representation" element={<RelationRepresentationPage />} />
            <Route path="/relation-properties" element={<RelationPropertiesNavigationPage />} />
            <Route path="/relation-properties-all" element={<RelationPropertiesPage />} />
            <Route path="/relation-properties-reflexive" element={<RelationReflexivePage />} />
            <Route path="/relation-properties-irreflexive" element={<RelationIrreflexivePage />} />
            <Route path="/relation-properties-symmetric" element={<RelationSymmetricPage />} />
            <Route path="/relation-properties-antisymmetric" element={<RelationAntisymmetricPage />} />
            <Route path="/relation-properties-transitive" element={<RelationTransitivePage />} />
            <Route path="/relation-properties-equivalence" element={<RelationEquivalencePage />} />
            <Route path="/relation-properties-partial-order" element={<RelationPartialOrderPage />} />
            <Route path="/relation-properties-total-order" element={<RelationTotalOrderPage />} />
            <Route path="/relation-warshalls" element={<RelationWarshallsPage />} />
            <Route path="/function-properties" element={<FunctionPropertiesPage />} />
            <Route path="/vertical-line-test" element={<VerticalLineTestPage />} />
            <Route path="/linear-function-slope" element={<LinearFunctionSlopeNavigationPage />} />
            <Route path="/linear-function-slope-change" element={<LinearFunctionSlopeChangePage />} />
            <Route path="/linear-function-slope-points" element={<LinearFunctionSlopePointsPage />} />
            <Route path="/quadratic-function" element={<QuadraticFunctionNavigationPage />} />
            <Route path="/quadratic-function-vertex" element={<QuadraticFunctionVertexPage />} />
            <Route path="/quadratic-function-roots" element={<QuadraticFunctionRootsPage />} />
            <Route path="/function-transformation" element={<FunctionTransformationNavigationPage />} />
            <Route 
              path="/function-transformation-vertical-translation" 
              element={<VerticalTranslationPage />} 
            />
            <Route 
              path="/function-transformation-horizontal-translation" 
              element={<HorizontalTranslationPage />} 
            />
            <Route 
              path="/function-transformation-vertical-compression-stretching" 
              element={<VerticalCompressionStretchingPage />} 
            />
            <Route 
              path="/function-transformation-horizontal-compression-stretching" 
              element={<HorizontalCompressionStretchingPage />} 
            />
            <Route path="/function-transformation-reflection" element={<ReflectionPage />} />
            <Route path="/function-transformation-all" element={<FunctionTransformationPage />} />
            <Route path="/function-domain" element={<FunctionDomainNavigationPage />} />
            <Route path="/function-domain-continuous" element={<FunctionDomainContinuousPage />} />
            <Route path="/function-domain-discrete" element={<FunctionDomainDiscretePage />} />
            <Route path="/function-composition" element={<FunctionCompositionNavigationPage />} />
            <Route path="/function-composition-check" element={<FunctionCompositionCheckPage />} />
            <Route path="/function-composition-plot" element={<FunctionCompositionPlotPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </Router>
  )
}

export default App
