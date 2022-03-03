import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import { makeStyles, ThemeProvider } from "@mui/styles"
import {
  ScrollToTop,
  NavigationButtons,
} from "components"
import { 
  HomePage,
  RelationRepresentationPage,
  RelationPropertiesNavigationPage,
  RelationPropertiesPage,
  RelationReflexivePage,
  RelationIrreflexivePage,
  RelationSymmetricPage,
  RelationAntisymmetricPage,
  RelationTransitivePage,
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
  FunctionDomainDiscretePage
 } from "pages"
import { theme } from "theme"

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
          <NavigationButtons />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/relation-representation" element={<RelationRepresentationPage />} />
            <Route path="/relation-properties" element={<RelationPropertiesNavigationPage />} />
            <Route path="/relation-properties-all" element={<RelationPropertiesPage />} />
            <Route path="/relation-properties-reflexive" element={<RelationReflexivePage />} />
            <Route path="/relation-properties-irreflexive" element={<RelationIrreflexivePage />} />
            <Route path="/relation-properties-symmetric" element={<RelationSymmetricPage />} />
            <Route path="/relation-properties-antisymmetric" element={<RelationAntisymmetricPage />} />
            <Route path="/relation-properties-transitive" element={<RelationTransitivePage />} />
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
            <Route  path="/function-transformation-reflection" element={<ReflectionPage />} />
            <Route  path="/function-transformation-all" element={<FunctionTransformationPage />} />
            <Route  path="/function-domain" element={<FunctionDomainNavigationPage />} />
            <Route  path="/function-domain-continuous" element={<FunctionDomainContinuousPage />} />
            <Route  path="/function-domain-discrete" element={<FunctionDomainDiscretePage />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </Router>
  )
}

export default App
