Hamburg Coding School - LMS

![ERD - HAMBURG CODING SCHOOL LMS.png](./ERD_LMS.png)

#### Creation
```sql
CREATE TABLE course_modules (
	course_module_id INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (course_module_id),
	name VARCHAR(40),
	hours INT(2)
);

CREATE TABLE teachers (
	teacher_id INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (teacher_id),
	name VARCHAR(40),
	email VARCHAR(40)
);	

CREATE TABLE course_events (
	course_event_id INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (course_event_id),
	start_date DATE,
	end_date DATE,
	course_module_id INT,
	FOREIGN KEY (course_module_id) REFERENCES course_modules (course_module_id) ON DELETE SET NULL,
	teacher_id INT,
	FOREIGN KEY (teacher_id) REFERENCES teachers (teacher_id) ON DELETE SET NULL
);

CREATE TABLE sessions (
	session_id INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (session_id),
	start DATETIME,
	end DATETIME,
	course_event_id INT,
	FOREIGN KEY (course_event_id) REFERENCES course_events (course_event_id) ON DELETE SET NULL
);
```
