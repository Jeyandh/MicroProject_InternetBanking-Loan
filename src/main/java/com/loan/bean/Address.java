package com.loan.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_address")
public class Address {
	@Id
	@Column(name = "user_doorno")
	private long doorNo;
	@Column(name = "user_street")
	private String street;
	@Column(name = "user_city")
	private String city;
	@Column(name = "user_pincode")
	private long pincode;
	@Column(name = "user_district")
	private String district;
	@Column(name = "user_id")
	private long userId;

	public Address() {
		super();
	}

	public Address(long doorNo, String street, String city, long pincode, String district, long userId) {
		super();
		this.doorNo = doorNo;
		this.street = street;
		this.city = city;
		this.pincode = pincode;
		this.district = district;
		this.userId = userId;
	}

	public long getDoorNo() {
		return doorNo;
	}

	public void setDoorNo(long doorNo) {
		this.doorNo = doorNo;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public long getPincode() {
		return pincode;
	}

	public void setPincode(long pincode) {
		this.pincode = pincode;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

}