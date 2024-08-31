import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
  Paper,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./GTHome.css";
import Chatbot from "../home/ChatBot";

function GuidedTourHome() {
  const [openCategories, setOpenCategories] = useState([]);
  const navigate = useNavigate();

  const diseaseCategories = [
    "Cardiovascular Diseases",
    "Respiratory Diseases",
    "Gastrointestinal Diseases",
    "Reproductive Diseases",
    "Musculoskeletal Diseases",
    "Endocrine Diseases",
    "Dermatological Diseases",
    "Neurological Diseases",
  ];

  const diseaseOptions = {
    "Dermatological Diseases": ["Hyperpigmentation", "Acne", "Skin Cancer"],
    "Endocrine Diseases": [
      "Diabetes",
      "Hormonal Imbalances",
      "Metabolic Syndrome",
    ],
    "Musculoskeletal Diseases": [
      "Bone Tumors",
      "Chronic Pain",
      "Osteoarthritis",
    ],
    "Reproductive Diseases": [
      "Infertility",
      "Polycystic Ovary Syndrome (PCOS)",
      "Endometriosis",
    ],
    "Gastrointestinal Diseases": [
      "Gastroesophageal reflux disease (acid reflux)",
      "Irritable bowel syndrome (IBS)",
      "Small intestinal bacterial overgrowth (SIBO)",
    ],
    "Respiratory Diseases": ["Asthma", "Chronic Obstructive Pulmonary Disease (COPD)", "Sleep Apnea"],
    "Neurological Diseases": ["Parkinson's Disease", "Neuropathy", "Migraine"],
  };

  const handleCategoryClick = (category) => {
    setOpenCategories((prevOpenCategories) =>
      prevOpenCategories.includes(category)
        ? prevOpenCategories.filter((cat) => cat !== category)
        : [...prevOpenCategories, category]
    );
  };

  const handleDiseaseClick = (disease) => {
    navigate('/loading');
  };

  return (
    <Box sx={{ p: 2, maxWidth: 600, margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        Diseases and Illnesses
      </Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <List>
          {diseaseCategories.map((category) => (
            <div key={category}>
              <ListItem button onClick={() => handleCategoryClick(category)}>
                <ListItemText primary={category} />
                {openCategories.includes(category) ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </ListItem>
              <Collapse
                in={openCategories.includes(category)}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {diseaseOptions[category]?.map((disease) => (
                    <ListItem
                      button
                      key={disease}
                      sx={{ pl: 4 }}
                      onClick={() => handleDiseaseClick(disease)}
                    >
                      <ListItemText primary={disease} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </Paper>
      <Chatbot />
    </Box>
   
  );
}

export default GuidedTourHome;
