-- Table to hold revenue data
CREATE TABLE Revenue (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    audit_date DATE NOT NULL,
    total_room_revenue DECIMAL(10, 2) NOT NULL,
    contract_revenue DECIMAL(10, 2) NOT NULL,
    food_beverage_revenue DECIMAL(10, 2),
    other_revenue DECIMAL(10, 2),
    total_tax_collected DECIMAL(10, 2),
    miscellaneous_revenue DECIMAL(10, 2),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by TEXT NOT NULL,
    CONSTRAINT unique_revenue_audit_date UNIQUE (audit_date)
);

-- Table to hold group room information
CREATE TABLE GroupRoom (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    audit_date DATE NOT NULL,
    group_name TEXT NOT NULL,
    daily_rooms INTEGER NOT NULL,
    daily_revenue DECIMAL(10, 2) NOT NULL,
    group_arrival DATE,
    group_departure DATE,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by TEXT NOT NULL,
    CONSTRAINT unique_group_room_audit_date_group_name UNIQUE (audit_date, group_name)
);

-- Table to hold out of order rooms data
CREATE TABLE OutOfOrderRoom (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    audit_date DATE NOT NULL,
    room_number INTEGER NOT NULL,
    reason TEXT NOT NULL,
    estimated_fix_date DATE,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by TEXT NOT NULL,
    CONSTRAINT unique_out_of_order_audit_date_room_number UNIQUE (audit_date, room_number)
);

-- Table to hold complimentary room information
CREATE TABLE CompRoom (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    audit_date DATE NOT NULL,
    guest_name TEXT NOT NULL,
    room_number INTEGER NOT NULL,
    reason TEXT NOT NULL,
    authorized_by TEXT NOT NULL,
    comp_nights INTEGER,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by TEXT NOT NULL,
    CONSTRAINT unique_comp_room_audit_date_room_number UNIQUE (audit_date, room_number)
);

-- Table to hold room occupancy overview data
CREATE TABLE RoomOccupancy (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    audit_date DATE NOT NULL,
    occupied_rooms INTEGER NOT NULL,
    vacant_rooms INTEGER NOT NULL,
    rooms_under_maintenance INTEGER,
    stay_over INTEGER,
    average_daily_rate DECIMAL(10, 2),
    occupancy_rate DECIMAL(5, 2) NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by TEXT NOT NULL,
    CONSTRAINT unique_room_occupancy_audit_date UNIQUE (audit_date)
);

-- Table to track daily audits
CREATE TABLE DailyAudit (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    audit_date DATE NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by TEXT NOT NULL
);

-- Table to hold total rooms information
CREATE TABLE TotalRooms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    total_rooms INTEGER NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by TEXT NOT NULL
);

-- Table to hold room types information
CREATE TABLE RoomTypes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    room_type TEXT NOT NULL,
    count INTEGER NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by TEXT NOT NULL,
    CONSTRAINT unique_room_type UNIQUE (room_type)
);

-- Table to hold room breakdown information
CREATE TABLE RoomBreakdown (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    room_type TEXT NOT NULL,
    occupied INTEGER NOT NULL,
    vacant INTEGER NOT NULL,
    under_maintenance INTEGER NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by TEXT NOT NULL,
    CONSTRAINT unique_room_breakdown_room_type UNIQUE (room_type)
);

-- Foreign keys to ensure data integrity (optional)
-- Link the tables with the DailyAudit table to ensure consistency
ALTER TABLE Revenue ADD CONSTRAINT fk_revenue_audit_date FOREIGN KEY (audit_date) REFERENCES DailyAudit(audit_date);
ALTER TABLE GroupRoom ADD CONSTRAINT fk_group_room_audit_date FOREIGN KEY (audit_date) REFERENCES DailyAudit(audit_date);
ALTER TABLE OutOfOrderRoom ADD CONSTRAINT fk_out_of_order_room_audit_date FOREIGN KEY (audit_date) REFERENCES DailyAudit(audit_date);
ALTER TABLE CompRoom ADD CONSTRAINT fk_comp_room_audit_date FOREIGN KEY (audit_date) REFERENCES DailyAudit(audit_date);
ALTER TABLE RoomOccupancy ADD CONSTRAINT fk_room_occupancy_audit_date FOREIGN KEY (audit_date) REFERENCES DailyAudit(audit_date);

-- Indexes to improve query performance
CREATE INDEX idx_revenue_audit_date ON Revenue(audit_date);
CREATE INDEX idx_group_room_audit_date ON GroupRoom(audit_date);
CREATE INDEX idx_out_of_order_room_audit_date ON OutOfOrderRoom(audit_date);
CREATE INDEX idx_comp_room_audit_date ON CompRoom(audit_date);
CREATE INDEX idx_room_occupancy_audit_date ON RoomOccupancy(audit_date);
