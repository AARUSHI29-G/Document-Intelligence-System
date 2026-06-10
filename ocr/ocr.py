import cv2
import numpy as np
import pytesseract


def preprocess_for_ocr(img):
    img = cv2.resize(img, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray = cv2.bilateralFilter(gray, 9, 75, 75)

    thresh = cv2.threshold(
        gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU
    )[1]

    return thresh


def run_ocr(processed_img):
    text_psm6 = pytesseract.image_to_string(processed_img, config="--oem 3 --psm 6")
    text_psm11 = pytesseract.image_to_string(processed_img, config="--oem 3 --psm 11")

    final_text = text_psm11 if len(text_psm11.strip()) > len(text_psm6.strip()) else text_psm6

    print("\n========== OCR OUTPUT ==========")
    print(final_text)
    print("================================\n")

    return final_text.strip()


def extract_text_from_image(image_path):
    img = cv2.imread(image_path)

    if img is None:
        print("OCR ERROR: Could not read image")
        return ""

    processed = preprocess_for_ocr(img)
    return run_ocr(processed)


def extract_text_from_pil_image(pil_image):
    img = cv2.cvtColor(np.array(pil_image), cv2.COLOR_RGB2BGR)
    processed = preprocess_for_ocr(img)
    return run_ocr(processed)