# Document Intelligence System

A web-based system that helps extract useful information from documents like PDFs, images and scans.

This project was built to experiment with OCR and basic NLP techniques for real-world document processing.

---

## What it does

- Reads text from images and PDFs
- Classifies document type
- Extracts useful fields like emails, phone numbers and IDs
- Generates a short summary of the document
- Saves processed documents in a simple dashboard

---

## Tech Used

Backend:
- FastAPI (Python)
- Tesseract OCR
- Transformers (HuggingFace)

Frontend:
- React
- Tailwind CSS

---

## How to Run

Backend:

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
Frontend:

frontend:
cd frontend
npm install
npm start

## About this project
This project was created as a practical implementation to understand how document processing works in real-world applications.

Author
Aarushi
GitHub: https://github.com/AARUSHI29-G

---


