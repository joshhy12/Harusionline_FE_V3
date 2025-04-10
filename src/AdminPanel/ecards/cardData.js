export const cardTemplates = [
    {
        id: 1,
        name: "Classic Elegance",
        imageUrl: "testcard.png",
        price: 5.99,
        categories: ["formal", "traditional"]
    },
    {
        id: 2,
        name: "Modern Minimalist",
        imageUrl: "testcard.png",
        price: 4.99,
        categories: ["contemporary", "simple"]
    },
    {
        id: 3,
        name: "Rustic Charm",
        imageUrl: "testcard.png",
        price: 6.99,
        categories: ["outdoor", "vintage"]
    },
    {
        id: 4,
        name: "Test Card",
        imageUrl: "testcard.png",
        price: 7.99,
        categories: ["test", "new"]
    }
];

export const cardBundles = [
    {
        bundleId: "B001",
        userId: "U1001",
        purchaseDate: "2023-05-10",
        totalCards: 12,
        paymentStatus: "paid",
        amount: 59.88,
        paymentReference: "PAY123456"
    },
    {
        bundleId: "B002",
        userId: "U1001",
        purchaseDate: "2023-05-15",
        totalCards: 20,
        paymentStatus: "unpaid",
        amount: 99.80,
        paymentReference: ""
    },
    {
        bundleId: "B003",
        userId: "U1002",
        purchaseDate: "2023-06-01",
        totalCards: 15,
        paymentStatus: "paid",
        amount: 74.85,
        paymentReference: "PAY789012"
    },
    {
        bundleId: "B004",
        userId: "U1003",
        purchaseDate: "2023-06-10",
        totalCards: 8,
        paymentStatus: "paid",
        amount: 39.92,
        paymentReference: "PAY345678"
    },
    {
        bundleId: "B005",
        userId: "U1004",
        purchaseDate: "2023-06-15",
        totalCards: 25,
        paymentStatus: "unpaid",
        amount: 124.75,
        paymentReference: ""
    }
];

export const generatedCards = [
    {
        cardId: "C001",
        bundleId: "B001",
        templateId: 1,
        recipientName: "John Doe",
        recipientPhone: "+1234567890",
        message: "You're invited to our wedding!",
        status: "unsent",
        createdAt: "2023-05-10T10:00:00",
        sentAt: null,
        viewCount: 0
    },
    {
        cardId: "C002",
        bundleId: "B001",
        templateId: 1,
        recipientName: "Jane Smith",
        recipientPhone: "+1987654321",
        message: "Please join us for our special day!",
        status: "sent",
        createdAt: "2023-05-10T10:00:00",
        sentAt: "2023-05-12T14:30:00",
        viewCount: 2
    },
    {
        cardId: "C003",
        bundleId: "B002",
        templateId: 2,
        recipientName: "Mike Johnson",
        recipientPhone: "+1122334455",
        message: "Happy Birthday!",
        status: "sent",
        createdAt: "2023-05-15T09:00:00",
        sentAt: "2023-05-15T10:00:00",
        viewCount: 5
    },
    {
        cardId: "C004",
        bundleId: "B003",
        templateId: 3,
        recipientName: "Sarah Williams",
        recipientPhone: "+1555666777",
        message: "Congratulations on your graduation!",
        status: "sent",
        createdAt: "2023-06-01T15:00:00",
        sentAt: "2023-06-02T12:00:00",
        viewCount: 3
    },
    {
        cardId: "C005",
        bundleId: "B004",
        templateId: 4,
        recipientName: "Tom Brown",
        recipientPhone: "+1999888777",
        message: "Thank you for everything!",
        status: "unsent",
        createdAt: "2023-06-10T11:00:00",
        sentAt: null,
        viewCount: 0
    }
];
