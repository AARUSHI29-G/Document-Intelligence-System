def detect_document_type(text: str) -> str:
    text_lower = text.lower()
    if "invoice" in text_lower or "amount" in text_lower:
        return "invoice"
    if "resume" in text_lower or "skills" in text_lower:
        return "resume"
    if "passport" in text_lower or "nationality" in text_lower:
        return "passport"
    return "unknown"


def extract_key_fields(text: str) -> dict:
    fields = {}

    # very basic extraction patterns
    import re
    
    name = re.search(r"Name[:\-]?\s*(.*)", text)
    email = re.search(r"[\w\.-]+@[\w\.-]+", text)
    phone = re.search(r"\+?\d[\d\-\s]{7,15}", text)

    fields["name"] = name.group(1) if name else None
    fields["email"] = email.group(0) if email else None
    fields["phone"] = phone.group(0) if phone else None

    return fields
